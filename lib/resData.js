class ResData {
    constructor(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.createdAt = new Date().toISOString()
    }
}

export { ResData }