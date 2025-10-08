import { postService } from "./posts.service.js"



class PostController {
    #postService
    constructor() {
        this.#postService = postService
    }
    async createPost(req, res, next) {
        try {
            const response = await this.#postService.createPost(req.body)
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getAllPost(req, res, next) {
        try {
            const response = await this.#postService.getAllPosts()
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getPostByID(req, res, next) {
        try {
            const id = req.params.id;
            const response = await this.#postService.getPostByID(id)
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)

        }
    }
    async updatePost(req, res, next) {
        try {
            const id = req.params.id;
            const response = -await this.#postService.updatePost(id, req.body)
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async deletePost(req, res, next) {
        try {
            const id = req.params.id;
            const response = await this.#postService.deletePost(id)
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
    async getPostByAuthor(req, res, next) {
        try {
            const id = req.params.userId;
            const response=await this.#postService.getPostByAuthor(id)
            res.status(response.statusCode).json(response)
        } catch (error) {
            next(error)
        }
    }
}

const postController = new PostController()
export { postController }