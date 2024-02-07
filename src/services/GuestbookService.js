import { supabase } from "./supabase";

export async function createMessage(data) {
    try {
        const { data: insertedData, error } = await supabase
            .from('guestbook')
            .insert([data])
            .select();

        if (error) {
            console.error(error);
            throw error;
        }

        return insertedData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
