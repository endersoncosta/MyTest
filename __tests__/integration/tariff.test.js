const request = require("supertest");
const app = require("../../app");
const { Tariff } = require("../../src/model");

describe("Database connection", () => {
    it("should return just a tariff from database", async () => {
        const _tariff = new Tariff(11, 16);
        const response = await _tariff.loadTariff();

        expect(response).toBe(true);
    });

    it("should get the price after load the tariff", async () => {
        const _tariff = new Tariff(11, 16);

        const response = await _tariff.loadTariff().then(() => {
            return _tariff.price;
        });

        expect(response).toBe(1.9);
    });
});

describe("Express Route", () => {
    it("should receive the result of the calc", async () => {
        const response = await request(app)
            .post("/v1/calculate")
            .send({
                minutes: 300,
                idPlan: 1,
                origin: 11,
                destiny: 16
            });

        console.log(response);
        expect(response.body.result).toBe(564.3);
    });
});