const dao = require("../dao/plan");
class Plan {
    constructor(values = {}) {
        this.id = values.id || 0;
        this.name = values.name || "";
        this.params = values.params || "";
    }

    async loadPlan() {
        const values = await dao.getPlan(this.id);
        this.name = values.name;
        this.params = values.params;
        return true;
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