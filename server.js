const tariff = require("./src/model/tariff");

const myTariff = new tariff(11, 16);
console.log(myTariff.value);