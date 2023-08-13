const sessionModel = require("../models/session.models");

async function createUserSession(userId, userAgent){
    const session = sessionModel.create({user: userId, userAgent})

    return await session
}

async function findSessions(query) {
    return sessionModel.find(query).lean()
}

async function updateSession(query, update) {
    return sessionModel.updateOne(query, update)
}

module.exports = {
    createUserSession,
    findSessions,
    updateSession
}