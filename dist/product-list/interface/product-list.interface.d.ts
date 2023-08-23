import { Document } from "mongoose";
export interface IProductList extends Document {
    readonly _id: string;
    readonly ProductImage: string;
    readonly ImageLink: string;
    readonly ProductName: string;
    readonly ASIN: string;
    readonly AmazonFBAEstimatedFees: string;
    readonly EstimatedMonthlySales: string;
    readonly EstimatedSalesRank: string;
    readonly SalesRank30days: string;
    readonly SalesRank90days: string;
    readonly SourcingURL: string;
    readonly SourcingPrice: string;
    readonly AmazonURL: string;
    readonly AmazonPrice: string;
    readonly AmazonOnListing: string;
    readonly NumberOfSellersOnTheListing: string;
    readonly NumberOfReviews: string;
    readonly EstimatedGrossProfit: string;
    readonly EstimatedGrossProfitMargin: string;
    readonly EstimatedNetProfit: string;
    readonly EstimatedNetProfitMargin: string;
}
