const mysql2 = require("mysql2");
 const dbconfig = require('../database/dbconfig');
 

const connectionPool = {

    pool: null,

    init: function() {
        this.pool = mysql2.createPool(dbconfig);
    },

    getPool: function(){
        return this.pool;
    }
}

module.exports = connectionPool;
