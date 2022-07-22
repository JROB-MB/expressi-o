const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getComments(id){
    const rows = await db.query(
        `SELECT idcomments, titleComment, textComment, ownComment, idpost
        FROM comments
        WHERE idcomments = ${id}
        `
    );
    const data = helper.emptyOrRows(rows);


    return {
        data
    }

}

module.exports = {
    getComments
}
