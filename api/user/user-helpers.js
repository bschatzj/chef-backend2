const db = require("../../dbconfig");

module.exports = {
    update,
    getUser,
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