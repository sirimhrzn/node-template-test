import  { Request, Response } from "express";
import BaseHandler from "./BaseHandler";

export default class AuthenticationHandler extends BaseHandler {
	index(req: Request, res: Response) {
		console.error(this)
		return this.response(res,200,null,'Authenticated success');
	}
}
