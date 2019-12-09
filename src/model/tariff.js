const dao = require("../dao/tariff");
class Tariff {
    constructor(origin, destiny) {
        this.origin = origin;
        this.destiny = destiny;
    }

    async loadTariff() {
        try {
            const values = await dao.getTariff(this.origin, this.destiny);
            this.value = values[0].value;
            return true;
        } catch (_e) {
            throw {message: "Tariff not found", code: 400};
        }
    }

    get price() {
        return this.value;
    }
}

module.exports = Tariff;