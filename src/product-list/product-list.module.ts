import { Module } from '@nestjs/common';
import { ProductListController } from './product-list.controller';
import { ProductListService } from './product-list.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({

  imports:[],
  controllers: [ProductListController],
  providers: [ProductListService]
})
export class ProductListModule {}
