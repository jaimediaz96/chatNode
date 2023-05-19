import { model } from './model.js';

function addUser(user) {
    const myUser = new model(user);
    return myUser.save();
}

function getUser() {
    return model.find();
}

async function updateUser(id, name) {
    const foundUser = await model.findById(id);

    foundUser.name = name;

    const newUser = await foundUser.save();

    return newUser;
}

function deleteUser(id) {
    return model.findByIdAndDelete(id);
}

export const store = {
    add: addUser,
    list: getUser,
    update: updateUser,
    delete: deleteUser
}