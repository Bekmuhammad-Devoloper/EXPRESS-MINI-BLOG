import { userService } from "./users.service.js";



class UserController {
    #userService;
    constructor() {
        this.#userService = userService;
    }
    async createUser(req, res, next) {
        try {
            const response =await this.#userService.createUser(req.body)
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getAllUsers(req, res, next) {
        try {
            const response =await this.#userService.getAllUsers()
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getUserByID(req, res, next) {
        try {
            const id = req.params.id
            const response =await this.#userService.getUserByID(id)
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async updateUser(req, res, next) {
        try {
            const id = req.params.id;
            const response =await this.#userService.updateUser(id, req.body)
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async deleteUser(req, res, next) {
        try {
            const id = req.params.id;
            const response =await this.#userService.deleteUser(id)
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
}

const userController = new UserController(userService)
export { userController }