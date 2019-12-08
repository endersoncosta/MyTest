const Calc = require("../../src/control/calc");


describe("Basic calculations", () => {
    it("should calculate promotional value and return price 0", () => {
        const params = {
            quantity: 10,
            promotionalValueInPercent: 0,
            afterPromotionalValueInPercent: 110
        };

        const response = Calc.calculateFinalValue(0, 10, params);
        expect(response).toBe(0);
    });

    it("should calculate promotional value and return price 220", () => {
        const params = {
            quantity: 10,
            promotionalValueInPercent: 0,
            afterPromotionalValueInPercent: 110
        };

        const response = Calc.calculateFinalValue(30, 10, params);
        expect(response).toBe(220);
    });

    it("should calculate promotional value and return price 1873", () => {
        const params = {
            quantity: 30,
            promotionalValueInPercent: 1,
            afterPromotionalValueInPercent: 110
        };

        const response = Calc.calculateFinalValue(200, 10, params);
        expect(response).toBe(1873);
    });

});