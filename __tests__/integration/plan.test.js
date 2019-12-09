const request = require("supertest");
const app = require("../../app");
const { Plan } = require("../../src/model");

describe("Database connection", async () => {
    let newPlanId = 0;

    await it("should insert a registry in database", async () => {
        const myPlan = new Plan({
            name: "test" + new Date().getTime(),
            params: {
                quantity: 30,
                promotionalValueInPercent: 0,
                afterPromotionValueInPercent: 110
            }
        });
        const response = await myPlan.create();
        newPlanId = response.insertId;

        expect(response.affectedRows).toBe(1);

    });

    await it("should return just a plan of database", async () => {
        const myPlan = new Plan({ id: this.newPlanId });
        const response = await myPlan.loadPlan();

        expect(response).toBe(true);
    });
});


describe("Express Route", () => {
    it("should receive a list of plans", async () => {
        const response = await request(app)
            .get("/v1/plans")
            .send();

        expect(response.text.length).toBeGreaterThan(0);
    });
});