import { Validator } from '../../../lib/validator.js'

class CreateUserDto {
    static schema = {
        username: {
            required: true,
            type: 'string',
            minLength: 3,
            maxLength: 30
        },
        email: {
            required: true,
            type: 'string',
            email: true
        },
        bio: {
            required: false,
            type: 'string',
            maxLength: 200
        }
    }

    static validate(data) {
        return Validator.validate(data, this.schema);
    }
}

export { CreateUserDto }