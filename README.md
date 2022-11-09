# :rocket: Teste Backend KaBuM

## :pushpin: Desafio proposto

Criar uma API REST com um endpoint para cotação de frete

### :no_good: O que foi usado para execução do projeto

- Express TS
- Jest para criação de testes automatizados

#### 💻 Pré-requisitos para rodar

- Ter o Node instalado na maquina.

##### :sunglasses: Como Rodar Aplicação e testes unitários

- 1˚ Clonar esse repositório em sua maquina.
- 2˚ Rodar o npm i ou yarn i para instalar todas as dependências do projeto
- 3˚ Alterar o nome do arquivo .env.example para .env e colocar a porta que a aplicação vai rodar.
    - Comando para rodar a aplicação: ```npm run dev ```
    - Comando para rodar os testes: ```npm run test```


###### <img src="https://www.herokucdn.com/favicons/favicon.ico" width="20">eroku
A API também foi hospedada na heroku, para utilizar basta mandar as requisições para essa url: https://teste-kabum.herokuapp.com

---
# :star: Rota

##### Cotar frete

**Método** : `POST`
**URL** : `/calculate_shipping`
**Parâmetros Obrigatórios** : body

- É necessário enviar um JSON no body da req com o nome da categoria.
Ex:

```json
{
    "dimensao": {
                    "altura":102,
                    "largura":40
                },
    "peso":400
}
```

**Retorno** : `JSON` </br>
**Status Code** : `200`</br>
**Response**:

```json
[
	{
	    "nome": "Entrega Ninja",
	    "valor_frete": 12,
	    "prazo_dias": 6
	},
	{
	    "nome": "Entrega Kabum",
	    "valor_frete": 8,
	    "prazo_dias": 4
	}
]
```

---