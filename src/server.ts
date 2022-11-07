require('dotenv').config()
import helmet from "helmet";
import express, { Application } from "express";
import { routes } from "./routes";
//@types/express - yarn add @types/express -D para adicionar 
const cors = require('cors')
const app: Application = express();
const expiryDate = new Date(Date.now() + 60 * 60 * 1000 * 24);
// app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(cors())

app.use(routes);

app.listen(process.env.PORT, () => console.log(`Server is run ${process.env.PORT}`));