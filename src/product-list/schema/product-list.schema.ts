import { Schema,SchemaFactory,Prop } from "@nestjs/mongoose";

import { v4 as uuidv4 } from 'uuid';


@Schema({collection:'ProductDetails'})
export class ProductDetails{

    @Prop({ type: String, default: function genUUID() {
        return uuidv4()
    }})
    _id: string

    @Prop()
    ProductImage:string; 

    @Prop()
    ImageLink:string;

    @Prop()
    ProductName:string;

    @Prop()
    ASIN:string;

    @Prop()
    AmazonFBAEstimatedFees : string;

    @Prop()
    EstimatedMonthlySales : string;

    @Prop()
    EstimatedSalesRank : string;

    @Prop()
    SalesRank30days : string;

    @Prop()
    SalesRank90days : string;

    @Prop()
    SourcingURL : string;

    @Prop()
    SourcingPrice : string;

    @Prop()
    AmazonURL  : string;

    @Prop()
    AmazonPrice: string;

    @Prop()
    AmazonOnListing : string;

    @Prop()
    NumberOfSellersOnTheListing : string;

    @Prop()
    NumberOfReviews : string;

    @Prop()
    EstimatedGrossProfit  : string;

    @Prop()
    EstimatedGrossProfitMargin: string;

    @Prop()
    EstimatedNetProfit : string;
    
    @Prop()
    EstimatedNetProfitMargin : string;


}

export const ProductListSchema = SchemaFactory.createForClass(ProductDetails);
