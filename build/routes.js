"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const Shipping_1 = require("./controllers/Shipping");
require('dotenv').config();
const routes = (0, express_1.Router)();
exports.routes = routes;
const ShippingController = new Shipping_1.Shipping;
routes.get('/', (req, res) => { res.json('runs'); });
routes.post('/calculate_shipping', ShippingController.Calculate);
//# sourceMappingURL=routes.js.map