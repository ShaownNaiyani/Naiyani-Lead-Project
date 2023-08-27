"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_list_dto_1 = require("./dtos/product-list.dto");
const class_validator_1 = require("class-validator");
let ProductListService = exports.ProductListService = class ProductListService {
    constructor(productListModel) {
        this.productListModel = productListModel;
    }
    async createLeads(file) {
        const csv = require('csvtojson');
        const productArray = await csv().fromString(file.buffer.toString());
        for (let product of productArray) {
            const productExists = await this.productAlreadyExist(product);
            if (!productExists) {
                const dtoFile = new product_list_dto_1.StoreProductListDto();
                Object.assign(dtoFile, product);
                const validationErrors = await (0, class_validator_1.validate)(dtoFile);
                if (validationErrors.length === 0) {
                    const newProduct = await new this.productListModel(dtoFile);
                    const saveProduct = await newProduct.save();
                }
                else {
                    return new common_1.HttpException('Empty filed not accptable.Please insert a value in empty field!', common_1.HttpStatus.BAD_REQUEST);
                }
            }
        }
    }
    async productAlreadyExist(product) {
        return await this.productListModel.findOne({
            ASIN: product.ASIN,
        });
    }
    async getALLleads(skip = 0, limit = 10) {
        const count = await this.productListModel.countDocuments({}).exec();
        const page_total = Math.floor((count - 1) / limit) + 1;
        const data = await this.productListModel.find().limit(limit).skip(skip);
        return {
            data: data,
            page_total: page_total,
            status: 200,
        };
    }
    async deleteAllData() {
        return this.productListModel.deleteMany({});
    }
};
exports.ProductListService = ProductListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("ProductDetails")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductListService);
//# sourceMappingURL=product-list.service.js.map