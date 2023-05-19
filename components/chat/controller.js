import { store } from "./store.js";

function addChat(users) {
    if (!users || !Array.isArray(users)) return Promise.reject("The data is wrong");

    const chat = {
        users
    };

    return store.add(chat);
}

function getChat(filterChat) {
    return store.list(filterChat);
}

export const controller = {
    addChat,
    getChat
}