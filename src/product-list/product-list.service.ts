import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductListService {

    async saveFile(file:any){

        const csv = require('csvtojson');
        const csvFilepath = process.cwd() + '/' + file.path;
       // console.log(csvFilepath)

        const productArray = await csv().fromFile(csvFilepath);
        productArray.splice(-2);
    
        console.log(productArray);
        return productArray;

    }
    
}
