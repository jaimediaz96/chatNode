import { model } from './model.js';

function addMessage(message) {
    const myMessage = new model(message);
    myMessage.save();
}

async function getMessage(filterUser) {
    let filter = {};
    if (filterUser !== null) filter = { user: filterUser };
    const messages = await model.find(filter);
    return messages;
}

async function updateMessage(id, message) {
    const foundMessage = await model.findById(id);

    foundMessage.message = message;

    const newMessage = await foundMessage.save();

    return newMessage;
}

function deleteMessage(id) {
    return model.findByIdAndDelete(id);
}

export const store = {
    add: addMessage,
    list: getMessage,
    update: updateMessage,
    delete: deleteMessage
}