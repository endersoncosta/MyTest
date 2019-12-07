const { Plan, Tariff } = require("../model");
const PlanController = require("./plan");
const Calc = require("./calc");

class costController {

    static async getPlans(page) {
        try {
            return await PlanController.getList(page);
        } catch (e) {
            console.log(e);
            return "Erro ao buscar informações.";
        }
    }

    static async calculateDiscount(data) {
        try {

            /*
            ?Valores esperado
            *{
            *    minutes: quantity,
            *    plan: id,
            *    origin,
            *    destiny
            *}
            */

            const comparedPlan = new Plan(data.idPlan);
            await comparedPlan.loadPlan();

            const testTariff = new Tariff(data.origin, data.destiny);
            await testTariff.loadTariff();

            return Calc.calculateFinalValue(data.minutes, testTariff.price, comparedPlan.params);
        } catch (e) {
            console.log(e);
            return "Erro ao calcular valores";
        }

    }


}

module.exports = costController;