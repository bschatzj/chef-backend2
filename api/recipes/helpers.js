const db = require("../../dbconfig");

module.exports = {
  getPosts,
  add,
  getBy,
  getByUserId,
  remove,
  update,
  getById
};

function getPosts() {
  return db("posts");
}

function getByUserId(user_id) {
  return db("posts")
  .where("user_id", user_id);
}

function getById(id) {
  return db("posts").where("id", id).first();
}

function getBy(filter) {
  return db("posts")
    .where(filter)
    .first();
}

function add(posts) {
  return db("posts")
    .insert(posts)
    .then(ids => {
      return getById(ids[0])
      .first()
    });
}

function remove(id) {
  return db("posts")
    .where("id", id)
    .del();
}

function update(id, changes) {
  return db("posts")
    .where({ id: id })
    .update(changes)
    .then(count => (count > 0 ? getById(id) : null));
}