class Tariff {
    constructor({ origin, destiny }) {
        this.origin = origin;
        this.destiny = destiny;
    }

    async getTariff(){
        return dao.getTariff();
    }

    async setTariff(values){
        return await dao.setTariff(values);
    }

}

module.exports = Tariff;