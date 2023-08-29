import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpStatus,
  Get,
  Query, UseGuards,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductListService } from './product-list.service';
import { Multer } from 'multer';
import { JwtGuard } from 'src/auth/authguard/jwt-auth.guard';
@Controller('product-list')
export class ProductListController {
  constructor(private productListService: ProductListService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file_product'))
  async LeadsFileUpload(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'csv',
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    return this.productListService.createLeads(file);
  }

  @Get('all-leads')
  async allLeads(@Query() { skip, limit }) {
    return this.productListService.getALLleads(skip, limit);
  }

  @Delete('delete')
  async deleteAllFilesData() {
    this.productListService.deleteAllData();
  }
}
