import { Validator } from "../../../lib/validator.js"


class CreatePostDto {
    static schema = {
        authorId: {
            required: true,
            type: 'string'
        },
        title: {
            required: true,
            type: 'string',
            minLength: 5,
            maxLength: 200,
        },
        content: {
            required: true,
            type: 'string',
            minLength: 10
        }
    }
    static validate(data) {
        return Validator.validate(data, this.schema)
    }
}

export { CreatePostDto }