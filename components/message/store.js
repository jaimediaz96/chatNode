const list = [];

function addMessage(message) {
    list.push(message);
}

function getMessage() {
    return list;
}

export const store = {
    add: addMessage,
    list: getMessage,
    // get: ,
    // update: ,
    // delete: 
}