/// <reference types="multer" />
import { ProductListService } from './product-list.service';
export declare class ProductListController {
    private productListService;
    constructor(productListService: ProductListService);
    LeadsFileUpload(file: Express.Multer.File): Promise<import("@nestjs/common").HttpException>;
    allLeads(): Promise<(import("mongoose").Document<unknown, {}, import("./interface/product-list.interface").IProductList> & import("./interface/product-list.interface").IProductList & Required<{
        _id: string;
    }>)[]>;
    deleteAllFilesData(): Promise<void>;
}
