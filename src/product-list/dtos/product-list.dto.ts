
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class StoreProductListDto{
    
    
    id : string;

    @IsNotEmpty()
    ProductImage:string; 

    @IsNotEmpty()
    ImageLink:string;

    @IsNotEmpty()
    ProductName:string;

    @IsNotEmpty()
    ASIN:string;

    @IsNotEmpty()
    AmazonFBAEstimatedFees : string

    @IsNotEmpty()
    EstimatedMonthlySales : string

    @IsNotEmpty()
    EstimatedSalesRank : string

    @IsNotEmpty()
    SalesRank30days : string

    @IsNotEmpty()
    SalesRank90days : string

    @IsNotEmpty()
    SourcingURL : string

    @IsNotEmpty()
    SourcingPrice : string

    @IsNotEmpty()
    AmazonURL  : string

    @IsNotEmpty()
    AmazonPrice: string

    @IsNotEmpty()
    AmazonOnListing : string

    @IsNotEmpty()
    NumberOfSellersOnTheListing : string
    
    @IsNotEmpty()
    NumberOfReviews : string

    @IsNotEmpty()
    EstimatedGrossProfit  : string

    @IsNotEmpty()
    EstimatedGrossProfitMargin: string

    @IsNotEmpty()
    EstimatedNetProfit : string

    @IsNotEmpty()
    EstimatedNetProfitMargin : string

}

function PrimaryGeneratedColumn(arg0: string): (target: StoreProductListDto, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}
