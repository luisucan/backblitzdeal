import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {

    @Get()
    findAll():any{
        return 'controller product'
    }

    @Get(':id')
    @ApiOperation({
        summary: 'search user by id'
    })
    findById( @Param('id') id:number ):any{
        return `con id ${id}`;
    }

    @Post()
    create(@Body() createProduct: CreateUserDto) {
        return 'This action adds a new cat';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUser: UpdateUserDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

}
