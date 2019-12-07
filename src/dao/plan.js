const db = require("./database");

class PlanDAO{
    static async getPlan(id){
        const sql = "select * from plan where id = ? limit 1";
        return await db.query(sql, [id]);
    }
    
    static async getList(position){
        const sql = "select * from plan limit ?, 5";
        return await db.query(sql, [position]);
    }
}

module.exports = PlanDAO;