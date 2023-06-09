function success(req, res, message, status) {
    res.status(status || 200).send({
        error: "",
        body: message
    });
}

function error(req, res, message, status, details) {
    console.error(details);
    res.status(status || 500).send({
        error: message,
        body: ""
    });
}

export const response = { success, error };