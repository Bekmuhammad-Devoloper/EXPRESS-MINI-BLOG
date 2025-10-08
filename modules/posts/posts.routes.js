import { Router } from 'express'
import { postController } from './posts.controller.js'

const postRouter = Router()

/**
 * @swagger
 * /mini-blog/posts:
 *   post:
 *     summary: Yangi post yaratish
 *     tags: [Posts]
 *     description: Yangi blog post yaratish uchun authorId, title va content majburiy
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePostDTO'
 *     responses:
 *       201:
 *         description: Post muvaffaqiyatli yaratildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Post'
 *                 message:
 *                   type: string
 *                   example: Post created successfully
 *       400:
 *         description: Validatsiya xatosi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Author topilmadi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
postRouter.post('/', postController.createPost.bind(postController))


/**
 * @swagger
 * /mini-blog/posts:
 *   get:
 *     summary: Barcha postlarni olish
 *     tags: [Posts]
 *     description: Tizimda mavjud barcha postlarni ro'yxatini qaytaradi
 *     responses:
 *       200:
 *         description: Postlar ro'yxati muvaffaqiyatli qaytarildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 *                 message:
 *                   type: string
 *                   example: Posts fetched successfully
 */
postRouter.get('/', postController.getAllPost.bind(postController))

/**
 * @swagger
 * /mini-blog/posts/{id}:
 *   get:
 *     summary: Bitta postni ID orqali olish
 *     tags: [Posts]
 *     description: Berilgan ID bo'yicha postni qaytaradi
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *         example: "1728132942"
 *     responses:
 *       200:
 *         description: Post muvaffaqiyatli topildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Post'
 *                 message:
 *                   type: string
 *                   example: Post found
 *       404:
 *         description: Post topilmadi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
postRouter.get('/:id', postController.getPostByID.bind(postController))

/**
 * @swagger
 * /mini-blog/posts/{id}:
 *   put:
 *     summary: Postni yangilash
 *     tags: [Posts]
 *     description: Berilgan ID bo'yicha postni yangilaydi
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *         example: "1728132942"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePostDTO'
 *     responses:
 *       200:
 *         description: Post muvaffaqiyatli yangilandi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Post'
 *                 message:
 *                   type: string
 *                   example: Post updated successfully
 *       404:
 *         description: Post topilmadi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
postRouter.put('/:id', postController.updatePost.bind(postController))

/**
 * @swagger
 * /mini-blog/posts/{id}:
 *   delete:
 *     summary: Postni o'chirish
 *     tags: [Posts]
 *     description: Berilgan ID bo'yicha postni o'chiradi
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *         example: "1728132942"
 *     responses:
 *       200:
 *         description: Post muvaffaqiyatli o'chirildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: null
 *                   example: null
 *                 message:
 *                   type: string
 *                   example: Post deleted successfully
 *       404:
 *         description: Post topilmadi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
postRouter.delete('/:id', postController.deletePost.bind(postController))



/**
 * @swagger
 * /mini-blog/posts/author/{userId}:
 *   get:
 *     summary: Muayyan user postlarini olish
 *     tags: [Posts]
 *     description: Berilgan authorId bo'yicha barcha postlarni qaytaradi
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: Author (User) ID
 *         example: "1728132941"
 *     responses:
 *       200:
 *         description: User postlari muvaffaqiyatli topildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 *                 message:
 *                   type: string
 *                   example: Posts by author fetched successfully
 *       404:
 *         description: User topilmadi yoki postlari yo'q
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
postRouter.get('/author/:userId',postController.getPostByAuthor.bind(postController))

export { postRouter }