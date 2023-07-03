import { ValidationError } from "../errors";

export class CreateUserDto {
	username: string;
	age: number;
	hobbies: string[];

	static getCreateUserDto(input: string): CreateUserDto {
		let createUserDto: CreateUserDto;

		try {
			createUserDto = JSON.parse(input);
		} catch (err) {
			throw new ValidationError('Incorrect input data');
		}

        if (!createUserDto.username) {
			throw new ValidationError('Incorrect input data');
		}

		if (typeof createUserDto.username !== 'string' ||
			typeof createUserDto.age !== 'number' ||
			!Array.isArray(createUserDto.hobbies) ||
			createUserDto.hobbies.some((item) => typeof item !== 'string')) {
			throw new ValidationError('Incorrect input data');
		}

		return createUserDto;
	}
}