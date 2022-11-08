"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe("Testes com erros no body", () => {
    it('Envia requisição sem body', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(server_1.default)
                .post('/calculate_shipping');
            expect(response.status).toEqual(200);
            expect(response.body).toEqual([]);
        });
    });
    it('Envia requisição apenas com peso ', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(server_1.default)
                .post('/calculate_shipping')
                .send({
                peso: 400
            })
                .set('Accept', 'application/json');
            expect(response.status).toEqual(200);
            expect(response.body).toEqual([]);
        });
    });
    it('Envia requisição apenas com dimensão,sem altura e largura', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(server_1.default)
                .post('/calculate_shipping')
                .send({
                dimensao: {},
            })
                .set('Accept', 'application/json');
            expect(response.status).toEqual(200);
            expect(response.body).toEqual([]);
        });
    });
    it('Envia requisição apenas com dimensão,com altura e largura', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(server_1.default)
                .post('/calculate_shipping')
                .send({
                dimensao: {
                    altura: 0,
                    largura: 40
                },
            })
                .set('Accept', 'application/json');
            expect(response.status).toEqual(200);
            expect(response.body).toEqual([]);
        });
    });
    it('Envia requisição apenas com tipos de campos inválidos', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(server_1.default)
                .post('/calculate_shipping')
                .send({
                dimensao: {
                    altura: -50,
                    largura: ""
                },
                peso: "100 quilos"
            })
                .set('Accept', 'application/json');
            expect(response.status).toEqual(200);
            expect(response.body).toEqual([]);
        });
    });
});
describe("Testes com body da requisição valido.", () => {
    it('Envia requisição apenas com body valido, para receber duas opções de frete', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(server_1.default)
                .post('/calculate_shipping')
                .send({
                dimensao: {
                    altura: 102,
                    largura: 40
                },
                peso: 400
            })
                .set('Accept', 'application/json');
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
    });
    it('Envia requisição apenas com body valido, para receber uma opções de frete', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(server_1.default)
                .post('/calculate_shipping')
                .send({
                dimensao: {
                    altura: 152,
                    largura: 50
                },
                peso: 850
            })
                .set('Accept', 'application/json');
            expect(response.status).toEqual(200);
            expect(response.body).toEqual([{
                    nome: "Entrega Ninja",
                    prazo_dias: 6,
                    valor_frete: 25.5,
                }]);
        });
    });
    it('Envia requisição apenas com body valido, para não receber opções de frete', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(server_1.default)
                .post('/calculate_shipping')
                .send({
                dimensao: {
                    altura: 230,
                    largura: 162
                },
                peso: 5600
            })
                .set('Accept', 'application/json');
            expect(response.status).toEqual(200);
            expect(response.body).toEqual([]);
        });
    });
});
//# sourceMappingURL=api.test.js.map