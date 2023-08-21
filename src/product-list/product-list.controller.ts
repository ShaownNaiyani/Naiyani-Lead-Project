import { Controller, Post, UseInterceptors,UploadedFile, } from '@nestjs/common';
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
    async uploadFile(@UploadedFile() file){

        return this.productListService.saveFile(file);

    }
    
}
