import { Module } from '@nestjs/common';
import { ProductListController } from './product-list.controller';
import { ProductListService } from './product-list.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductListSchema } from './schema/product-list.schema';


@Module({

  imports:[
    MongooseModule.forFeature([{
      name: 'ProductDetails',
      schema:ProductListSchema,
      collection:'ProductDetails',
    }])
  ],
  controllers: [ProductListController],
  providers: [ProductListService]
})
export class ProductListModule {}
