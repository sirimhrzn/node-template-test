import  { Response } from "express";

interface ResponseData {
	data: any | null;
	success: boolean;
	message: string;
}

export default class BaseHandler {
	protected response(res: Response, statusCode: number, data: any | null, message: string) {
		if (
			typeof statusCode !== "number" ||
			statusCode < 100 ||
			statusCode >= 600
		) {
			throw new Error("Invalid status code");
		}

		const responseData = {
			success: statusCode < 400,
			data: data !== undefined ? data : null,
			message: message || (statusCode < 400 ? "Success" : "Error"),
		};

		return res.status(statusCode).json(responseData);
	}
}
