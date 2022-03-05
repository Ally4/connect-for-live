export const successfullResponse = (res, status, message, data) => {
    return res.status(status).json({
        status: status,
        message,
        data
    });
}

export const failureResponse = (res, status, message, data) => {
    return res.status(status).json({
        status: status,
        message,
        data
    });
}

export const serverErrorResponse = (res, status, message) => {
    return res.status(500).json({
        status: status,
        message: `This is the error from the server: ${message}!.`
    });
}
