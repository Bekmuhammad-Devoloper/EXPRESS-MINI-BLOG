import express from 'express'
import { modulesRouter } from './modules/modules.routes.js'
import { errorHeandler } from './lib/error.handler.js'
import { ResData } from './lib/resData.js';
import { swaggerSpec, swaggerUi } from './swagger.config.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Mini Blog API Docs'
}));


app.use('/mini-blog', modulesRouter);


app.use((_, res) => {
    const response = new ResData(404, 'Router not found!');
    res.status(404).json(response);
});

app.use(errorHeandler)

export default app 