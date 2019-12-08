const db = require("./database");

class PlanDAO{
    static async getPlan(id){
        const sql = "select * from plan where id = ? limit 1";
        return await db.query(sql, [id]);
    }
    
    static async getList(position){
        const sql = "select id, name from plan limit ?, 5";
        return await db.query(sql, [position]);
    }

    static async create(name, params){
        const sql = "insert into plan (name, params) values (?,?)";
        return await db.query(sql, [name,params]);

    }
}

module.exports = PlanDAO;