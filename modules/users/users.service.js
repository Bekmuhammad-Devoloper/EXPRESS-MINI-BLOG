import { CustomError } from "../../lib/customError.js";
import { Repository } from "../../lib/repository.js";
import { ResData } from "../../lib/resData.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { UpdateUserDto } from "./dto/update-user.dto.js";
import { UserEntity } from "./users.entity.js";
import { resolve } from 'node:path'

class UserService {
    #repository;
    constructor() {
        this.#repository = new Repository(resolve('database', 'users.json'))
    }

    async createUser(userData) {
        CreateUserDto.validate(userData)
        const users = await this.#repository.read()
        const existingUser = users.find((u) => u.email === userData.email)

        if (existingUser) {
            throw new CustomError(400, 'This email is already registered!')
        }
        const newUser = new UserEntity(userData.username, userData.email, userData.bio)
        await this.#repository.writeNewData(newUser)
        const response = new ResData(201, 'User Created successfully!', newUser)
        return response
    }

    async getAllUsers() {
        const users = await this.#repository.read()
        const response = new ResData(200, 'Success!', users)
        return response
    }

    async getUserByID(id) {
        const users = await this.#repository.read()
        const user = users.find((u) => u.id === id)
        if (!user) {
            throw new CustomError(404, 'User not found!');
        }
        const response = new ResData(200, 'Success!', user)
        return response
    }

    async updateUser(id, userData) {
        UpdateUserDto.validate(userData)
        const users = await this.#repository.read()
        const userIndex = users.findIndex((u) => u.id === id); 
        const user=users[userIndex]
        if (userIndex===-1) {
            throw new CustomError(404, 'User not found!');
        }

        if (userData.email && userData.email !== userData.email) {
            const existingUser = users.find(u => u.email === userData.email);
            if (existingUser) {
                throw new CustomError(400, 'This email is already registered!')
            }
        }
        users[userIndex] = {
            ...user,
            ...userData
        };
        const updateUser = users[userIndex]
        await this.#repository.write(users)
        const response = new ResData(200, 'User updated successfully!', updateUser)
        return response
    }

    async deleteUser(id) {
        const users = await this.#repository.read()
        const userIndex = users.findIndex((u) => u.id === id)
        if (userIndex === -1) {
            throw new CustomError(404, 'User not found!');

        }
        const deleteUser = users[userIndex]
        users.splice(userIndex, 1)
        await this.#repository.write(users)
        const response = new ResData(200, 'User deleted successfully!', deleteUser)
        return response
    }
}

const usersPath = resolve('database', 'users.json')
const userRepo = new Repository(usersPath)
const userService = new UserService(userRepo)

export { userService }