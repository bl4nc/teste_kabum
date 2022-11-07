import { Router } from "express";
import { Shipping } from "./controllers/Shipping";

require('dotenv').config()
const routes = Router();
const ShippingController = new Shipping
routes.get('/', (req, res) => {res.json('runs')})

routes.post('/calculate_shipping', ShippingController.Calculate)

export { routes }
