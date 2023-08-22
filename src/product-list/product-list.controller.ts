import { Controller, Post, UseInterceptors,UploadedFile, ParseFilePipe, ParseFilePipeBuilder, HttpStatus, } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ProductListService } from './product-list.service';


@Controller('product-list')
export class ProductListController {

    constructor(private productListService: ProductListService){}

    @Post('/upload')
    @UseInterceptors(
        FileInterceptor('file_product',{
            storage: diskStorage({
                destination:'./csv'
            })
        })
    )
    async uploadFile(@UploadedFile(
        new ParseFilePipeBuilder()
        .addFileTypeValidator({
        fileType: 'csv',
        })
        .build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })
    ) file: Express.Multer.File){

        return this.productListService.saveFile(file);

    }
    

    @Post('delete')
    async deleteAllFilesData(){
        this.productListService.deleteAllData();
    }
}
