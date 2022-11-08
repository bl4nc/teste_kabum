"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors = require('cors');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(cors());
app.use(routes_1.routes);
app.listen(process.env.PORT || 8080, () => console.log(`Server is run ${process.env.PORT || 8080}`));
exports.default = app;
//# sourceMappingURL=server.js.map