import { pb } from './pocketbase'

export async function createMessage(data) {
    try {
        return await pb.collection('guestbook').create(data);
    } catch (error) {
        console.error(error);
    }
}
