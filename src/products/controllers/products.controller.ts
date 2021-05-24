import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {

    @Get()
    findAll():any{
        return 'controller product'
    }

    @Get(':id')
    findById( @Param('id') id:number ):any{
        return `con id ${id}`;
    }

    @Post()
    create(@Body() createProduct: CreateProductDto) {
        return 'This action adds a new cat';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProduct: UpdateProductDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

}
