class Plan {
    constructor({ id }) {
        this.id = id;
        const response = await dao.getPlan(this.id);

        this.name = response.name;
        this.params = response.params;
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