import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    _id: string;

    @Column()
    username: string;

    @Column()
    password: string;
}

export class UserInput {
    username: string;
    password: string;
}
