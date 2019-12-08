const request = require("supertest");
const app = require("../../app");
const { Plan } = require("../../src/model");

describe("Database connection", () => {
    it("should insert a registry in database", async () => {
        const myPlan = new Plan({
            name: "test" + new Date().getTime(),
            params: {
                quantity: 30,
                promotionalValueInPercent: 0,
                afterPromotionValueInPercent: 110
            }
        });
        const response = await myPlan.create();

        expect(response.affectedRows).toBe(1);

    });

    it("should receive a list of plans", async () => {
        const response = await request(app)
            .get("/v1/plans/0")
            .send();

        expect(response.status).toBe(200);
    });
});