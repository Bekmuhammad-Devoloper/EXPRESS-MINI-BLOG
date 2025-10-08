import { Router } from 'express'
import { userController } from './users.controller.js'

const userRouter = Router()

/**
 * @swagger
 * /mini-blog/users:
 *   post:
 *     summary: Yangi user yaratish
 *     tags: [Users]
 *     description: Yangi user yaratish uchun username va email majburiy
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserDTO'
 *     responses:
 *       201:
 *         description: User muvaffaqiyatli yaratildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *                 message:
 *                   type: string
 *                   example: User created successfully
 *       400:
 *         description: Validatsiya xatosi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
userRouter.post('/', userController.createUser.bind(userController))


/**
 * @swagger
 * /mini-blog/users:
 *   get:
 *     summary: Barcha userlarni olish
 *     tags: [Users]
 *     description: Tizimda mavjud barcha userlarni ro'yxatini qaytaradi
 *     responses:
 *       200:
 *         description: Userlar ro'yxati muvaffaqiyatli qaytarildi
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
 *                     $ref: '#/components/schemas/User'
 *                 message:
 *                   type: string
 *                   example: Users fetched successfully
 */
userRouter.get('/', userController.getAllUsers.bind(userController))


/**
 * @swagger
 * /mini-blog/users/{id}:
 *   get:
 *     summary: Bitta userni ID orqali olish
 *     tags: [Users]
 *     description: Berilgan ID bo'yicha userni qaytaradi
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *         example: "1728132941"
 *     responses:
 *       200:
 *         description: User muvaffaqiyatli topildi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *                 message:
 *                   type: string
 *                   example: User found
 *       404:
 *         description: User topilmadi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
userRouter.get('/:id', userController.getUserByID.bind(userController))


/**
 * @swagger
 * /mini-blog/users/{id}:
 *   put:
 *     summary: Userni yangilash
 *     tags: [Users]
 *     description: Berilgan ID bo'yicha userni yangilaydi
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *         example: "1728132941"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserDTO'
 *     responses:
 *       200:
 *         description: User muvaffaqiyatli yangilandi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *                 message:
 *                   type: string
 *                   example: User updated successfully
 *       404:
 *         description: User topilmadi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
userRouter.put('/:id', userController.updateUser.bind(userController))


/**
 * @swagger
 * /mini-blog/users/{id}:
 *   delete:
 *     summary: Userni o'chirish
 *     tags: [Users]
 *     description: Berilgan ID bo'yicha userni o'chiradi
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *         example: "1728132941"
 *     responses:
 *       200:
 *         description: User muvaffaqiyatli o'chirildi
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
 *                   example: User deleted successfully
 *       404:
 *         description: User topilmadi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
userRouter.delete('/:id', userController.deleteUser.bind(userController))

export { userRouter }