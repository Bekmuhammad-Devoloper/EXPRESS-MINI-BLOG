import { Validator } from "../../../lib/validator.js"


class UpdatePostDto {
    static schema = {
        title: {
            required: false,
            type: 'string',
            minLength: 5,
            maxLength: 200
        },
        content: {
            required: false,
            type: 'string',
            minLength: 10
        }
    }
    static validate(data) {
        return Validator.validate(data, this.schema)
    }
}

export { UpdatePostDto }