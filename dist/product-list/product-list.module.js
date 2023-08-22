"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListModule = void 0;
const common_1 = require("@nestjs/common");
const product_list_controller_1 = require("./product-list.controller");
const product_list_service_1 = require("./product-list.service");
const mongoose_1 = require("@nestjs/mongoose");
const product_list_schema_1 = require("./schema/product-list.schema");
let ProductListModule = exports.ProductListModule = class ProductListModule {
};
exports.ProductListModule = ProductListModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: 'ProductDetails',
                    schema: product_list_schema_1.ProductListSchema,
                    collection: 'ProductDetails',
                }])
        ],
        controllers: [product_list_controller_1.ProductListController],
        providers: [product_list_service_1.ProductListService]
    })
], ProductListModule);
//# sourceMappingURL=product-list.module.js.map