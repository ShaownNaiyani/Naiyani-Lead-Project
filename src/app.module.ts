import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductListModule } from './product-list/product-list.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [

    MongooseModule.forRoot("mongodb+srv://Shaown:Arpita@cluster0.m94phd5.mongodb.net/NaiyaniLeadsDB?retryWrites=true&w=majority"),
    ProductListModule,
    UsersModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
