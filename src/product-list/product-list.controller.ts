<<<<<<< HEAD
import { Controller, Post, UseInterceptors,UploadedFile, ParseFilePipeBuilder, HttpStatus, } from '@nestjs/common';
import { Multer } from 'multer';
=======
import { Controller, Post, UseInterceptors,UploadedFile, ParseFilePipeBuilder, HttpStatus, Get, } from '@nestjs/common';
>>>>>>> d686cfcadd570c171afdabd73b08490ef82284b5
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductListService } from './product-list.service';



@Controller('product-list')
export class ProductListController {

    constructor(private productListService: ProductListService){}

    @Post('/upload')
    @UseInterceptors(
        FileInterceptor('file_product')
    )
    async LeadsFileUpload(@UploadedFile(
        new ParseFilePipeBuilder()
        .addFileTypeValidator({
        fileType: 'csv',
        })
        .build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })
    ) file: Express.Multer.File){

        return this.productListService.createLeads(file);

    }

    @Get('all-leads')
    async allLeads(){

        return this.productListService.getALLleads();
        
    }
    

    @Post('delete')
    async deleteAllFilesData(){
        this.productListService.deleteAllData();
    }


}
