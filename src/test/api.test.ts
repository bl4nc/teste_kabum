import request from "supertest"
import app from "../server";



describe("Testes com erros no body", () => {
    it('Envia requisição sem body', async function () {
        const response = await request(app)
            .post('/calculate_shipping')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);
    });
    it('Envia requisição apenas com peso ', async function () {
        const response = await request(app)
            .post('/calculate_shipping')
            .send({
                peso: 400
            }
            )
            .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);
    });
    it('Envia requisição apenas com dimensão,sem altura e largura', async function () {
        const response = await request(app)
            .post('/calculate_shipping')
            .send({
                dimensao: {

                },
            }
            )
            .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);
    });
    it('Envia requisição apenas com dimensão,com altura e largura', async function () {
        const response = await request(app)
            .post('/calculate_shipping')
            .send({
                dimensao: {
                    altura: 0,
                    largura: 40
                },
            }
            )
            .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);
    });
    it('Envia requisição apenas com tipos de campos inválidos', async function () {
        const response = await request(app)
            .post('/calculate_shipping')
            .send({
                dimensao: {
                    altura: -50,
                    largura: ""
                },
                peso: "100 quilos"
            }
            )
            .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);
    });
});

describe("Testes com body da requisição valido.", () => {
    it('Envia requisição apenas com body valido, para receber duas opções de frete', async function () {
        const response = await request(app)
            .post('/calculate_shipping')
            .send(
                {
                    dimensao: {
                        altura: 102,
                        largura: 40
                    },
                    peso: 400
                }
            )
            .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([{
            nome: "Entrega Ninja",
            prazo_dias: 6,
            valor_frete: 12,
        },
        {
            nome: "Entrega Kabum",
            prazo_dias: 4,
            valor_frete: 8,
        }]);
    });
    it('Envia requisição apenas com body valido, para receber uma opções de frete', async function () {
        const response = await request(app)
            .post('/calculate_shipping')
            .send(
                {
                    dimensao: {
                        altura: 152,
                        largura: 50
                    },
                    peso: 850
                }
            )
            .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([{
            nome: "Entrega Ninja",
            prazo_dias: 6,
            valor_frete: 25.5,
        }]);
    });
    it('Envia requisição apenas com body valido, para não receber opções de frete', async function () {
        const response = await request(app)
            .post('/calculate_shipping')
            .send(
                {
                    dimensao: {
                        altura: 230,
                        largura: 162
                    },
                    peso: 5600
                }
            )
            .set('Accept', 'application/json')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);
    });

})