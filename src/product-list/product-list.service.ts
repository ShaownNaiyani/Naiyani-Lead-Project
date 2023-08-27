import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProductList } from './interface/product-list.interface';
import { StoreProductListDto } from './dtos/product-list.dto';
import { validate } from 'class-validator';

@Injectable()
export class ProductListService {

    constructor(@InjectModel("ProductDetails") private productListModel: Model<IProductList> ){}

    async createLeads(file:any){

        const csv = require('csvtojson');

        const productArray = await csv().fromString(file.buffer.toString());

        
        for(let product of productArray){
            const productExists = await this.productAlreadyExist(product);

            if(!productExists){
                const dtoFile = new StoreProductListDto();
                Object.assign(dtoFile, product);
    
                const validationErrors = await validate(dtoFile);
                if (validationErrors.length === 0) {
                    
                    const newProduct = await new this.productListModel(dtoFile);
                    const saveProduct = await newProduct.save();
                    
                } else {
                   return new HttpException('Empty filed not accptable.Please insert a value in empty field!', HttpStatus.BAD_REQUEST);
                }
            }

        }

    }

    async productAlreadyExist(product:any){

       return  await this.productListModel.findOne({
            ASIN : product.ASIN,
          });


    }

    async getALLleads(){
        return this.productListModel.find().exec();
    }

    async deleteAllData(){
        return this.productListModel.deleteMany({})
    }
    
}
