class Tariff {
    constructor({ origin, destiny }) {
        this.origin = origin;
        this.destiny = destiny;
    }

    async loadTariff(){
        const values = await dao.getTariff(this.origin,this.destiny);
        this.price = values.price;
        return true;
    }

    get price(){
        return this.price;
    }
}

module.exports = Tariff;