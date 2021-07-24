import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

export function errorMiddleware(err: Error, req: Request, res: Response, _: NextFunction) {
    if (err instanceof AppError) {
        return res.status(err.status).json({
            status: "error",
            message: err.message
        })
    }

    console.log(err);

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
}