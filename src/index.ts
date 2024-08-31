import express, { type Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "#routes";
// import morgan from 'morgan';
const morgan = require("morgan");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(
	morgan(
		':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :response-time ms',
	),
);
app.use("/api/v1", routes.v1);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
