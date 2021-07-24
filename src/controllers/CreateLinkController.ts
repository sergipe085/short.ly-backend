import { Request, Response } from "express";

import { CreateLinkService } from "../services/CreateLinkService";

interface IRequest {
    link: string;
}

export class CreateLinkController {
    async handle(req: Request, res: Response) {
        const { link } = req.body as IRequest;

        const createLinkService = new CreateLinkService();

        return res.json(await createLinkService.execute(link));
    }
}