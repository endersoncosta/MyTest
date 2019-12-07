const { Plan } = require("../model");
const dao = require("../dao/plan");

class PlanController{
    static async getList(page){
        let position = 0;
        if(page > 0) position = page * 5; 

        return await dao.getList(position);
    }
}

module.exports = PlanController;