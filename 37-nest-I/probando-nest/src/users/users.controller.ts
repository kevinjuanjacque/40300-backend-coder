import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';

//api/users/

//quiero crear un interface/clase/entidad que se llame response y que esta tenga msg:string data:any

enum MsgStatus {
  success = 'success',
  error = 'error',
  warning = 'warning',
}
interface ResponseUser {
  msg: 'success' | 'error' | 'warning';
  data: any;
}

@Controller('/api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private config: ConfigService
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<ResponseUser> {
    const userResponse = await this.usersService.create(createUserDto);
    return { msg: 'success', data: userResponse };
  }

  @Get()
  async findAll(@Query('limit') limit = '2') {
    const coder = this.config.get<string>('coder');
    console.log(coder);
    const users = await this.usersService.findAll(+limit);
    return { msg: 'success', data: users, limit };
  }

  @Get('/:uid')
  async findOne(@Param('uid') id: string) {
    const user = await this.usersService.findOne(id);

    return { msg: 'success', data: user };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updateUser = await this.usersService.update(id, updateUserDto);
    return { msg: 'success', data: updateUser };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const response = await this.usersService.remove(id);
    return { msg: 'success', data: response };
  }
}
