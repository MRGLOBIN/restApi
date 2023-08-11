const sessionModel = require("../models/session.models");

async function createUserSession(userId, userAgent){
    const session = sessionModel.create({user: userId, userAgent})

    return await session
}

module.exports = {
    createUserSession
}