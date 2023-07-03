import { CreateUserDto } from "./createUser.dto";
import { User } from "./user.model";
import { UsersService } from "./users.service";

export class UsersController {
	constructor(private readonly usersService: UsersService) {}

    async create(input: string): Promise<User> {
        const createUserDto = CreateUserDto.getCreateUserDto(input);

		return await this.usersService.create(createUserDto);
	}

	async findAll(): Promise<User[]> {
		return await this.usersService.findAll();
	}

	async findOne(id: string): Promise<User> {
		this.usersService.validateUserId(id);

		return await this.usersService.findOne(id);
	}
}
