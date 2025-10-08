import *as env from 'dotenv'
import app from './app.js'
env.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishga tushdi`);
    console.log(`🌐 Server URL: http://localhost:${PORT}`);
    console.log(`📚 API Documentation (Swagger): http://localhost:${PORT}/api-docs`);
});