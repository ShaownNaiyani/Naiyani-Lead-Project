import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductListModule } from './product-list/product-list.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
