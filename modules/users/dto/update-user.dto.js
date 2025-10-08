import { Validator } from '../../../lib/validator.js'

class UpdateUserDto {
    static schema = {
        username: {
            required: false,
            type: 'string',
            minLength: 3,
            maxLength: 30
        },
        email: {
            required: false,
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

export { UpdateUserDto }