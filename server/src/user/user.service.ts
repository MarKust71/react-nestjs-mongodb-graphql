import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User, UserInput } from './user.entity';
import * as uuid from 'uuid';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: MongoRepository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(input: UserInput): Promise<User> {
        const user = new User();
        user._id = uuid.v4();
        user.username = input.username;
        user.password = input.password;
        return this.userRepository.save(user);
    }
}
