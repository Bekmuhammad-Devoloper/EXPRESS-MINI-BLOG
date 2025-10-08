import { generateID } from "../../lib/generateID.js";


class UserEntity {
    constructor(username, email, bio = '') {
        this.id = generateID();
        this.username = username;
        this.email = email;
        this.bio = bio;
        this.createdAt = new Date().toISOString()
    }
}

export { UserEntity }