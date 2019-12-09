class validatorController {

    static validateCalculateEntry(data) {
        if (data.minutes < 1) throw { message: "Amount of minutes is invalid!", code: 400 };
        if (data.idPlan < 1) throw { message: "Selected plan is invalid!", code: 400 };
        if (data.origin < 11 || data.origin > 99) throw { message: "Selected origin is invalid!", code: 400 };
        if (data.destiny < 11 || data.destiny > 99) throw { message: "Selected destiny is invalid!", code: 400 };
    }
}

module.exports = validatorController;