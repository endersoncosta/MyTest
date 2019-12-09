const controller = require("../control/cost");


module.exports = function (app) {
    app.get("/v1/plans", async (req, res) => {
        await controller.getPlans(req.query.page)
            .then(response => res.send(response))
            .catch(error => res.status(500).send(error));
    });

    app.post("/v1/calculate", async (req, res) => {
        await controller.calculateDiscount(req.body)
            .then(response => res.send(response))
            .catch(error => res.status(error.code).send(error));
    });
};