import { CustomError } from './customError.js'
class Validator {
    static validate(data, schema) {
        const errors = [];

        for (const [field, rules] of Object.entries(schema)) {
            const value = data[field];

            if (rules.required && (value === undefined || value === null || value === '')) {
                errors.push(`${field} majburiy`);
                continue;
            }

            if (!value && !rules.required) continue;

            if (rules.type && typeof value !== rules.type) {
                errors.push(`${field} ${rules.type} bo'lishi kerak`);
            }

            if (rules.minLength && value.length < rules.minLength) {
                errors.push(`${field} kamida ${rules.minLength} ta belgidan iborat bo'lishi kerak`);
            }

            if (rules.maxLength && value.length > rules.maxLength) {
                errors.push(`${field} maksimum ${rules.maxLength} ta belgidan iborat bo'lishi kerak`);
            }

            if (rules.email && !this.isValidEmail(value)) {
                errors.push(`${field} to'g'ri email formatda bo'lishi kerak`);
            }
        }

        if (errors.length > 0) {
            throw new CustomError(400,errors.join(', '));
        }

        return true;
    }

    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

export { Validator };