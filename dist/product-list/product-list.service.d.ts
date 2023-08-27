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
/// <reference types="mongoose/types/inferschematype" />
import { HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { IProductList } from './interface/product-list.interface';
export declare class ProductListService {
    private productListModel;
    constructor(productListModel: Model<IProductList>);
    createLeads(file: any): Promise<HttpException>;
    productAlreadyExist(product: any): Promise<import("mongoose").Document<unknown, {}, IProductList> & IProductList & Required<{
        _id: string;
    }>>;
    getALLleads(): Promise<(import("mongoose").Document<unknown, {}, IProductList> & IProductList & Required<{
        _id: string;
    }>)[]>;
    deleteAllData(): Promise<import("mongodb").DeleteResult>;
}
