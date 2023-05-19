import { model } from './model.js';

function addChat(chat) {
    const myChat = new model(chat);
    return myChat.save();
}

function getChat(filterChat) {
    return new Promise(async (resolve, reject) => {
        let filter = {};
        if (filterChat !== null) filter = { users: filterUser };
        const message = await model.find(filter)
            .populate("users")
            .catch(error => reject(error));
        resolve(message);
    });
}

export const store = {
    add: addChat,
    list: getChat
}