/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare class ProductDetails {
    id: string;
    ProductImage: string;
    ImageLink: string;
    ProductName: string;
    ASIN: string;
    AmazonFBAEstimatedFees: string;
    EstimatedMonthlySales: string;
    EstimatedSalesRank: string;
    SalesRank30days: string;
    SalesRank90days: string;
    SourcingURL: string;
    SourcingPrice: string;
    AmazonURL: string;
    AmazonPrice: string;
    AmazonOnListing: string;
    NumberOfSellersOnTheListing: string;
    NumberOfReviews: string;
    EstimatedGrossProfit: string;
    EstimatedGrossProfitMargin: string;
    EstimatedNetProfit: string;
    EstimatedNetProfitMargin: string;
}
export declare const ProductListSchema: import("mongoose").Schema<ProductDetails, import("mongoose").Model<ProductDetails, any, any, any, import("mongoose").Document<unknown, any, ProductDetails> & ProductDetails & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ProductDetails, import("mongoose").Document<unknown, {}, ProductDetails> & ProductDetails & {
    _id: import("mongoose").Types.ObjectId;
}>;
