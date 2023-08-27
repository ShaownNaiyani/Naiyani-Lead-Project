import { ProductListService } from './product-list.service';
export declare class ProductListController {
    private productListService;
    constructor(productListService: ProductListService);
    LeadsFileUpload(file: Express.Multer.File): Promise<import("@nestjs/common").HttpException>;
    deleteAllFilesData(): Promise<void>;
}
