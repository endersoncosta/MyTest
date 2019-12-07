
class Calc {
    constructor() { }

    calculateValues(price, params) {
        const promotionalValue = price * (params.promotionalValueInPercent / 100);
        const afterPromotionalValue = price * (params.promotionalValueInPercent / 100);
        return { promotionalValue, afterPromotionalValue };
    }

    calculatePeriods(minutes, params) {
        if (!minutes > 0) return 0;
        let remaining = minutes - params.quantity;
        if (remaining <= 0) {
            return { promotionalTime: minutes, afterPromotionalTime: 0 };
        } else {
            return { promotionalTime: params.quantity, afterPromotionalTime: remaining };
        }
    }


    calculateFinalValue(minutes, price, params) {
        const value = this.calculateValues(price, params);
        const period = this.calculatePeriods(minutes, params);

        const promotional = value.promotionalValue * period.promotionalTime;
        const afterPromotional = value.afterPromotionalValue * period.afterPromotionalTime;

        return promotional + afterPromotional;
    }
}


module.exports = Calc;