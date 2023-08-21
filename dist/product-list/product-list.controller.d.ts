import { ProductListService } from './product-list.service';
export declare class ProductListController {
    private productListService;
    constructor(productListService: ProductListService);
    uploadFile(file: any): Promise<any>;
}
