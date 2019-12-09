const { Plan, Tariff } = require("../model");
const PlanController = require("./plan");
const Calc = require("./calc");
const validator = require("./validator");

class costController {

    static async getPlans(page) {
        try {
            if (!page) page = 0;
            return await PlanController.getList(page);
        } catch (e) {
            console.log(e);
            return "Erro ao buscar informações.";
        }
    }

    static async calculateDiscount(data) {
        try {
            validator.validateCalculateEntry(data);

            const _plan = new Plan({ id: data.idPlan });
            await _plan.loadPlan();


            const _tariff = new Tariff(data.origin, data.destiny);
            await _tariff.loadTariff();

            const result = await Calc.calculateFinalValueAsync(data.minutes, _tariff.price, _plan.getParams());

            const response = { message: "success", result };
            return response;
        } catch (e) {
            if (!e.code)
                throw { code: 500, message: e };
            else
                throw e;
        }
    }


}

module.exports = costController;