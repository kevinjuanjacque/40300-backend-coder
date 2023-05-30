import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  user: Array<User>

  constructor() {
    this.user = []
  }

  create(createUserDto: CreateUserDto) {
    return this.user.push({ id: this.user.length, ...createUserDto })
  }

  findAll(limit: number): Array<User> {
    const clonUser = [...this.user]
    return clonUser.splice(0, limit)
  }

  findOne(id: number) {
    return this.user[id]
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log({ ...this.user[id] })

    const newUser = {
      id: this.user[id].id,
      first_name: updateUserDto.first_name || this.user[id].first_name,
      last_name: updateUserDto.last_name || this.user[id].last_name,
      email: updateUserDto.email || this.user[id].email,
      password: updateUserDto.password || this.user[id].password,
    }
    this.user[id] = newUser
    console.log(this.user)
    return 'user updated'
  }

  remove(id: number) {
    return this.user.splice(id, 1)
  }
}
