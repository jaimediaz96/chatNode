import { store } from "./store.js";

function addMessage(chat, user, message, file) {
    return new Promise ((resolve, reject) => {
        if (!user || !message) {
            console.error("[messageController] No user or message");
            reject("The data is wrong");
        }

        const fileUrl = file ? 
            "http://localhost:3000/app/files/" + file.filename
            : "";

        console.log(fileUrl);

        const fullMessage = {
            chat,
            user,
            message,
            date: new Date(),
            file: fileUrl
        };

        store.add(fullMessage);

        resolve(fullMessage);
    });
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) reject("Invalid data");

        const result = await store.update(id, message);

        resolve(result);
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) reject("Invalid id");

        const result = store.delete(id)
            .then(() => {
                resolve();
            })
            .catch(error => {
                reject(error);
            });
    });
}

export const controller = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}