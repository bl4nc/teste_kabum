import { DeliveryCompany } from "../model/DeliveryCompany";

export const deliveries_companies: DeliveryCompany[] = [
    {
        name: 'Entrega Ninja',
        rules: {
            calculation_constant: 0.3,
            min_height: 10,
            max_height: 200,
            min_width: 6,
            max_width: 140,
            deadline: 6
        }
    },
    {
        name: 'Entrega Kabum',
        rules: {
            calculation_constant: 0.2,
            min_height: 5,
            max_height: 140,
            min_width: 13,
            max_width: 125,
            deadline: 4
        }
    }

]