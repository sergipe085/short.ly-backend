import { Router } from "express";
import { getCustomRepository } from "typeorm";

import { CreateLinkController } from "../controllers/CreateLinkController";
import { LinksRepository } from "../repositories/LinksRepository";

const routes = Router();

const createLinkController = new CreateLinkController();

routes.post("/", createLinkController.handle);

routes.get("/:code", async (req, res) => {
    const { code } = req.params;

    const linksRepository = getCustomRepository(LinksRepository);

    const link = await linksRepository.findOne({ where: { code } });

    if (!link) {
        return res.status(400).json({
            status: "error",
            message: "Esse link nao existe!"
        })
    }

    return res.json(link);
})

export default routes;