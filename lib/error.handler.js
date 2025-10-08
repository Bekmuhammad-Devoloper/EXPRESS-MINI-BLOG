import { ResData } from "./resData.js"

function errorHeandler(err, req, res, next) {
    const statusCode = err.statusCode || 500
    const response = new ResData(statusCode, err.message)
    if (process.env.NODE_ENV === 'development') {
        console.error('Error:', err);
    }
    res.status(response.statusCode)
    res.json(response)
}

export { errorHeandler }