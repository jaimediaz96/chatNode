import { store } from "./store.js";

function addUser(name) {
    if (!name) return Promise.reject("Invalid name");
    
    const user = {
        name
    };

    return store.add(user);
}

function listUsers() {
    return store.list();
}

function updateUser(id, name) {
    if (!id || !name) return Promise.reject("Invalid data");

    return store.update(id, name);
}

function deleteUser(id) {

    if (!id) return Promise.reject("Invalid id");

    return store.delete(id);
}

export const controller = {
    addUser,
    listUsers,
    updateUser,
    deleteUser
};