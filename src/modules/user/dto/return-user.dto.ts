import { User } from "../entities/user.entity";


export class ReturnUserDto {
    id?: number;
    name: string;
    password: string;
    is_validated: boolean;

    constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.password = user.password;
        this.is_validated = user.is_validated;
    }
}











