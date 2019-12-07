const dao = require("../dao/plan");
class Plan {
    constructor({ id }) {
        this.id = id;
    }

    async loadPlan(){
        const values = await dao.getPlan(this.id);
        this.name = values.name;
        this.params = values.params;
        return true;
    }

    get name() {
        return this.name;
    }

    get params(){
        return this.params;
    }

    /*
    ? Valores esperados nos parâmetros.
    *const params = {
    *    quantity: 30,
    *    promotionalValueInPercent: 0,
    *    afterPromotionValueInPercent: 110
    *};
    */




}

module.exports = Plan;