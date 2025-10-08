import { generateID } from '../../lib/generateID.js';

class PostEntity {
    constructor(authorId, title, content) {
        this.id = generateID();
        this.authorId = authorId; 
        this.title = title;       
        this.content = content;   
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }
}

export { PostEntity };