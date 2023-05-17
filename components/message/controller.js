
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
        resolve(fullMessage);
    });
}

export { addMessage }