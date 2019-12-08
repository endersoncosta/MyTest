
class Calc {
    static _calculateValues(price, params) {
        const promotionalValue = price * (params.promotionalValueInPercent / 100);
        const afterPromotionalValue = price * (params.afterPromotionValueInPercent / 100);
        return { promotionalValue, afterPromotionalValue };
    }

    static _calculatePeriods(minutes, params) {
        let remaining = minutes - params.quantity;

        if (remaining <= 0) {
            return { promotionalTime: minutes, afterPromotionalTime: 0 };
        } else {
            return { promotionalTime: params.quantity, afterPromotionalTime: remaining };
        }
    }

    static calculateFinalValue(minutes, price, params) {
        if (minutes <= 0 || price <= 0) return 0;

        const value = this._calculateValues(price, params);
        const period = this._calculatePeriods(minutes, params);

        const promotional = value.promotionalValue * period.promotionalTime;
        const afterPromotional = value.afterPromotionalValue * period.afterPromotionalTime;

        const planValue =  promotional + afterPromotional;
        const normalValue = minutes * price;

        return { planValue, normalValue };

    }

    static async calculateFinalValueAsync(minutes, price, params) {
        return new Promise((resolve) => {
            resolve(this.calculateFinalValue(minutes, price, params));
        });
    }
}


module.exports = Calc;