const db = require("./database");

class TariffDAO{
    static async getTariff(origin,destiny){
        const sql = "select * from plan where origin = ? and destiny = ?";
        return await db.query(sql, [origin,destiny]);
    }
}

module.exports = TariffDAO;