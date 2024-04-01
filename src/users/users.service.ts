import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { GetUserArgs } from './dto/args/get-user.dto';

@Injectable()
export class UsersService {

  async createUser(createUserData: CreateUserInput){

  }

  async getUser(getUserArgs: GetUserArgs){
    
  }
}
