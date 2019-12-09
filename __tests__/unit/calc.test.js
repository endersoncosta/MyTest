const Calc = require("../../src/control/calc");


describe("Basic calculations", () => {
    it("should calculate promotional value and return price 0", () => {
        const params = {
            quantity: 10,
            promotionalValueInPercent: 0,
            afterPromotionValueInPercent: 110
        };

        const response = Calc.calculateFinalValue(10, 10, params);
        expect(response.planValue).toBe(0);
    });

    it("should calculate promotional value and return price 220", () => {
        const params = {
            quantity: 10,
            promotionalValueInPercent: 0,
            afterPromotionValueInPercent: 110
        };

        const response = Calc.calculateFinalValue(30, 10, params);
        expect(response.planValue).toBe(220);
    });

    it("should calculate promotional value and return price 1873", () => {
        const params = {
            quantity: 30,
            promotionalValueInPercent: 1,
            afterPromotionValueInPercent: 110
        };

        const response = Calc.calculateFinalValue(200, 10, params);
        expect(response.planValue).toBe(1873);
    });

    it("should try to calculate promotional value and return error", () => {
        const params = {
            quantity: 0,
            promotionalValueInPercent: 0,
            afterPromotionValueInPercent: 110
        };
        try{
            Calc.calculateFinalValue(0, 10, params);
        }catch(e){
            expect(e.message).toBe("This entry is not valid!");
        }
    });

});