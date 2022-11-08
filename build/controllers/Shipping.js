"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipping = void 0;
const DeliveryCompanies_1 = require("../mock/DeliveryCompanies");
const calculate_delivery_1 = require("../utils/calculate-delivery");
class Shipping {
    Calculate(request, response) {
        const { dimensao, peso } = request.body;
        if (!dimensao || !peso)
            return response.json([]);
        let delivery_data = [];
        DeliveryCompanies_1.deliveries_companies.forEach(delivery_company => {
            let height_greater_than_min = delivery_company.rules.min_height <= dimensao.altura;
            let height_less_than_max = delivery_company.rules.max_height >= dimensao.altura;
            let width_greater_than_min = delivery_company.rules.min_width <= dimensao.largura;
            let width_less_than_max = delivery_company.rules.max_width >= dimensao.largura;
            let can_delivery = height_greater_than_min && height_less_than_max && width_greater_than_min && width_less_than_max;
            if (can_delivery) {
                let price = (0, calculate_delivery_1.calculateDelivery)(peso, delivery_company.rules.calculation_constant);
                delivery_data.push({
                    nome: delivery_company.name,
                    valor_frete: price,
                    prazo_dias: delivery_company.rules.deadline
                });
            }
        });
        response.json(delivery_data);
    }
}
exports.Shipping = Shipping;
//# sourceMappingURL=Shipping.js.map