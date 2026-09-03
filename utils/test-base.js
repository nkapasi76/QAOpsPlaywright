const test = require("node:test");

const base = require ("@playwright/test");

exports.test = base.test.extend({
    testdatafororder : {
    "username": "nkapasi@yahoo.com",
    "password": "Xaviers1",
    "productName": "ZARA COAT 3"

    }

})
