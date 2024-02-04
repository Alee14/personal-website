import { pb } from './pocketbase'

let name;
let email;
let website;
let message;

export async function createMessage() {
    try {
        const data = {
            name: name,
            email: email,
            website: website,
            message: message
        };
        return await pb.collection('guestbook').create(data);
    } catch (error) {
        console.error(error);
    }
}
