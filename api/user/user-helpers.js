const db = require("../../dbconfig");

module.exports = {
    update,
}

function update(id, update) {
    return db('newUSers')
    .where({ id })
    .update(update)
}