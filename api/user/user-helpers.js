const db = require("../../dbconfig");

module.exports = {
    update,
    getUser,
    getAllUsers
}

function update(id, update) {
    return db('newUsers')
    .where({ id })
    .update(update)
}

function getUser(id) {
    return db('newUsers')
    .where( { id } )
}

function getAllUsers() {
    return db('newUsers')
}