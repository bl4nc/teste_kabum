require('dotenv').config()
import helmet from "helmet";
import express from "express";
import { routes } from "./routes";
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors())

app.use(routes);

app.listen(process.env.PORT, () => console.log(`Server is run ${process.env.PORT}`));

export default app 