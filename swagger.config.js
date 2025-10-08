import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Mini Blog API',
            version: '1.0.0',
            description: 'Mini Blog API Documentation - Users va Posts modullarini boshqarish',
            contact: {
                name: 'API Support',
                email: 'support@miniblog.com'
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
        tags: [
            {
                name: 'Users',
                description: 'User management endpoints'
            },
            {
                name: 'Posts',
                description: 'Post management endpoints'
            }
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            example: '1728132941'
                        },
                        username: {
                            type: 'string',
                            example: 'binyaminn'
                        },
                        email: {
                            type: 'string',
                            example: 'binyaminn@example.com'
                        },
                        bio: {
                            type: 'string',
                            example: 'Backend developer'
                        },
                        createdAt: {
                            type: 'string',
                            example: '2024-10-05T12:00:00.000Z'
                        }
                    }
                },
                Post: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            example: '1728132942'
                        },
                        authorId: {
                            type: 'string',
                            example: '1728132941'
                        },
                        title: {
                            type: 'string',
                            example: 'Express mini blog'
                        },
                        content: {
                            type: 'string',
                            example: 'Bu mening birinchi blog postim'
                        },
                        createdAt: {
                            type: 'string',
                            example: '2024-10-05T12:00:00.000Z'
                        },
                        updatedAt: {
                            type: 'string',
                            example: '2024-10-05T12:00:00.000Z'
                        }
                    }
                },
                CreateUserDTO: {
                    type: 'object',
                    required: ['username', 'email'],
                    properties: {
                        username: {
                            type: 'string',
                            example: 'binyaminn'
                        },
                        email: {
                            type: 'string',
                            example: 'binyaminn@example.com'
                        },
                        bio: {
                            type: 'string',
                            example: 'Backend developer'
                        }
                    }
                },
                UpdateUserDTO: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            example: 'binyaminn_updated'
                        },
                        email: {
                            type: 'string',
                            example: 'new@example.com'
                        },
                        bio: {
                            type: 'string',
                            example: 'Senior Backend developer'
                        }
                    }
                },
                CreatePostDTO: {
                    type: 'object',
                    required: ['authorId', 'title', 'content'],
                    properties: {
                        authorId: {
                            type: 'string',
                            example: '1728132941'
                        },
                        title: {
                            type: 'string',
                            example: 'Express mini blog'
                        },
                        content: {
                            type: 'string',
                            example: 'Bu mening birinchi blog postim'
                        }
                    }
                },
                UpdatePostDTO: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string',
                            example: 'Updated title'
                        },
                        content: {
                            type: 'string',
                            example: 'Updated content'
                        }
                    }
                },
                Error: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            example: false
                        },
                        data: {
                            type: 'null',
                            example: null
                        },
                        message: {
                            type: 'string',
                            example: 'Error message'
                        }
                    }
                },
                Success: {
                    type: 'object',
                    properties: {
                        success: {
                            type: 'boolean',
                            example: true
                        },
                        data: {
                            type: 'object'
                        },
                        message: {
                            type: 'string',
                            example: 'Success message'
                        }
                    }
                }
            }
        }
    },
    apis: [
        path.join(__dirname, 'modules/posts/posts.routes.js'),
        path.join(__dirname, 'modules/users/users.routes.js'),
    ],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };