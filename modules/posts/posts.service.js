import { resolve } from 'node:path'
import { Repository } from '../../lib/repository.js';
import { PostEntity } from './posts.entity.js';
import { ResData } from '../../lib/resData.js';
import { CustomError } from '../../lib/customError.js';
import { UpdatePostDto } from './dto/update-post.dto.js';
import { CreatePostDto } from './dto/create-post.dto.js';
import { userService } from '../users/users.service.js';


class PostService {
    #repository;
    constructor() {
        this.#repository = new Repository(resolve('database', 'posts.json'))
    }
    async createPost(postData) {
        CreatePostDto.validate(postData)
        const author = await userService.getUserByID(postData.authorId);
        if (!author.data) {
            throw new CustomError('Author topilmadi', 404);
        }
        const newPost = new PostEntity(postData.authorId, postData.title, postData.content)
        await this.#repository.writeNewData(newPost)
        const response = new ResData(201, 'Post created successfully!', newPost)
        return response
    }
    async getAllPosts() {
        const posts = await this.#repository.read()
        const response = new ResData(200, 'Success!', posts)
        return response
    }
    async getPostByID(id) {
        const posts = await this.#repository.read()
        const post = posts.find((p) => p.id === id)
        if (!post) {
            throw new CustomError(404, 'Post not found!');
        }
        const response = new ResData(200, 'Success', post)
        return response
    }
    async updatePost(id, postData) {
        UpdatePostDto.validate(postData)
        const posts = await this.#repository.read()
        const post = posts((p) => p.id === id)
        if (!post) {
            throw new CustomError(404, 'Post not found!');
        }
        const postIndex = posts.findIndex((p) => p.id === id)
        const updatePost = posts[postIndex]
        posts[postIndex] = { ...post, ...postData }
        await this.#repository.write(posts)
        const response = new ResData(200, 'Post updated successfully!', updatePost)
        return response
    }
    async deletePost(id) {
        const posts = await this.#repository.read()
        const postIndex = posts.findIndex((p) => p.id === id)
        if (postIndex === -1) {
            throw new CustomError(404, 'Post not found!')
        }
        const deletedPost = posts[postIndex]
        posts.splice(postIndex, 1)
        await this.#repository.write(posts)
        const response = new ResData(200, 'Post deleted successfully!', deletedPost)
        return response
    }
    async getPostByAuthor(id) {
        const user = await userService.getUserByID(id)
        if (!user.data) {
            throw new CustomError(404, 'User not found!')
        }

        const posts = await this.#repository.read()
        const authorPosts = posts.filter((p) => p.authorId === id)
        if (authorPosts.length === 0) {
            const response = new ResData(200, 'This user has no posts yet', [])
            return response
        }
        const response = new ResData(200, 'Success!', authorPosts)
        return response
    }
}

const postPath = resolve('database', 'posts.json')
const postRepo = new Repository(postPath)
const postService = new PostService(postRepo)

export { postService }