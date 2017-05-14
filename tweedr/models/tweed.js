const db = require('../db/config');

const Tweed = {};

Tweed.findAll = () => {
  return db.query(
    `SELECT * FROM tweeds`
  );
};

Tweed.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM tweeds
    WHERE id = $1`, 
    [id]
  );
};

Tweed.create = (tweed) => {
  return db.one(
    `
    INSERT INTO tweeds (tweed_text, tweed_time)
    VALUES $1, $2
    RETURNING *`,
    [tweed.tweed_text, tweed.tweed_time]
  );
};

module.exports = Tweed;