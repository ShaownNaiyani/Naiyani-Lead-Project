import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProductList } from './interface/product-list.interface';
import { StoreProductListDto } from './dtos/product-list.dto';
import { validate } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
import { error } from 'console';

@Injectable()
export class ProductListService {

    constructor(@InjectModel("ProductDetails") private productListModel: Model<IProductList> ){}

    async saveFile(file:any){

        const csv = require('csvtojson');
        const csvFilepath = process.cwd() + '/' + file.path;

        const productArray = await csv().fromFile(csvFilepath);

        const productWithDtoArray :StoreProductListDto[] = [];
        
        for(let product of productArray){
            const productExists = await this.productAlreadyExist(product);

            if(productExists){
                console.log("Same Product found!")
            }
            else
            {
                const dtoFile = new StoreProductListDto();

                dtoFile.id = uuidv4();
                Object.assign(dtoFile, product);
    
                const validationErrors = await validate(dtoFile);
                if (validationErrors.length === 0) {
                    
                    const newProduct = await new this.productListModel(dtoFile);
                    const saveProduct = await newProduct.save();
                    productWithDtoArray.push(saveProduct);
                    
                } else {
                   return new HttpException('Empty filed not accptable.Please insert a value in empty field!', HttpStatus.BAD_REQUEST);
                }
               
            }



        }
        console.log(productWithDtoArray.length);
        return  productWithDtoArray;

    }

    async productAlreadyExist(product:any){

       return  await this.productListModel.findOne({
            ProductImage: product.ProductImage,
            ImageLink : product.ImageLink,
            ProductName : product.ProductName,
            ASIN : product.ASIN,
            AmazonFBAEstimatedFees : product.AmazonFBAEstimatedFees,
            EstimatedMonthlySales : product.EstimatedMonthlySales,
            EstimatedSalesRank : product.EstimatedSalesRank,
            SalesRank30days : product.SalesRank30days,
            SalesRank90days : product.SalesRank90days,
            SourcingURL : product.SourcingURL,
            SourcingPrice : product.SourcingPrice,
            AmazonURL :  product.AmazonURL,
            AmazonPrice : product.AmazonPrice,
            AmazonOnListing : product.AmazonOnListing,
            NumberOfSellersOnTheListing : product.NumberOfSellersOnTheListing,
            NumberOfReviews: product.NumberOfReviews,
            EstimatedGrossProfit:  product.EstimatedGrossProfit,
            EstimatedGrossProfitMargin:product.EstimatedGrossProfitMargin,
            EstimatedNetProfit : product.EstimatedNetProfit,
            EstimatedNetProfitMargin :product.EstimatedNetProfitMargin,

          });


    }

    async deleteAllData(){
        return this.productListModel.deleteMany({})
    }
    
}
