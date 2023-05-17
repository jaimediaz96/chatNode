import { store } from "./store.js";

function addMessage(user, message) {
    return new Promise ((resolve, reject) => {
        if (!user || !message) {
            console.error("[messageController] No user or message");
            reject("The data is wrong");
        }

        const fullMessage = {
            user,
            message,
            date: new Date()
        };

        store.add(fullMessage);

        resolve(fullMessage);
    });
}

function getMessages(user, message) {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

export const controller = {
    addMessage,
    getMessages
}