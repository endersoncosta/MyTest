const dao = require("../dao/plan");
class Plan {
    constructor(values = {}) {
        this.id = values.id || 0;
        this.name = values.name || "";
        this.params = values.params || "";
    }

    async loadPlan() {
        try {
            const values = await dao.getPlan(this.id);
            this.name = values[0].name;
            this.params = JSON.parse(values[0].params);
            return true;
        } catch (_e) {
            throw {message: "Plan not found!", code: 400};
        }
    }

    getName() {
        return this.name;
    }

    getParams() {
        return this.params;
    }

    async create() {
        return await dao.create(this.name, JSON.stringify(this.params));
    }





}

module.exports = Plan;