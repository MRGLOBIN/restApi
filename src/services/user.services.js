const user = require('../models/user.model')

async function createUser(input) {
    try {
        return await user.create(input)
    } catch (err) {
        throw new Error(e)
    }
}

module.exports = {
    createUser,
}