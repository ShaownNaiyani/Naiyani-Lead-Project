/// <reference types="multer" />
import { ProductListService } from './product-list.service';
export declare class ProductListController {
    private productListService;
    constructor(productListService: ProductListService);
    uploadFile(file: Express.Multer.File): Promise<import("@nestjs/common").HttpException | import("./dtos/product-list.dto").StoreProductListDto[]>;
    deleteAllFilesData(): Promise<void>;
}
