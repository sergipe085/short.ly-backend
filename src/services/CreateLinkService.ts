import http from "http";
import https from "https";
import AppError from "../errors/AppError";

import { getCustomRepository } from "typeorm";
import { LinksRepository } from "../repositories/LinksRepository";

import short from "shortid"

export class CreateLinkService {
    async execute(link: string) {
        const [type] = link.split(":");
        
        try {
            const httpMethod = type == "http" ? http : https;
            httpMethod.get(link);
        } 
        catch (error) {
            throw new AppError("Invalid URL", 400);
        }

        const linksRepository = getCustomRepository(LinksRepository);

        var link_code = short.generate();
        while(true) {
            const link_exists = await linksRepository.findOne({ where: { code: link_code } });

            if (!link_exists) {
                break;
            }
            else {
                link_code = short.generate();
            }
        }

        const linkInstance = linksRepository.create({
            code: link_code,
            target_url: link
        });

        console.log(linkInstance)

        await linksRepository.save(linkInstance);

        return linkInstance;
    }
}