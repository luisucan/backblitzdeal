import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    findAll():any{
        return 'controller product'
    }

    @Get(':id')
    findById( @Param('id') id:number ):any{
        return `con id ${id}`;
    }

    @Post()
    create(@Body() createProduct: CreateUserDto) {
        return 'This action adds a new cat';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProduct: UpdateUserDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

}
