import { Request, Response } from "express";
import { deliveries_companies } from "../mock/DeliveryCompanies";
import { calculateDelivery } from "../utils/calculate-delivery";


class Shipping {

    Calculate(request: Request, response: Response) {
        const { dimensao, peso } = request.body
        if (!dimensao || !peso) return response.json([])
        let delivery_data: {}[] = []
        deliveries_companies.forEach(delivery_company => {
            let height_greater_than_min = delivery_company.rules.min_height <= dimensao.altura
            let height_less_than_max = delivery_company.rules.max_height >= dimensao.altura
            let width_greater_than_min = delivery_company.rules.min_width <= dimensao.largura
            let width_less_than_max = delivery_company.rules.max_width >= dimensao.largura
            let can_delivery = height_greater_than_min && height_less_than_max && width_greater_than_min && width_less_than_max
            if (can_delivery) {
                let price = calculateDelivery(peso, delivery_company.rules.calculation_constant)
                delivery_data.push({
                    nome: delivery_company.name,
                    valor_frete: price,
                    prazo_dias: delivery_company.rules.deadline
                }
                )
            }
        })
        response.json(delivery_data)
    }

}

export { Shipping };