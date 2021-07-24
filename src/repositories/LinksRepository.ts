import { EntityRepository, Repository } from "typeorm";
import { Link } from "../models/Link";

@EntityRepository(Link)
export class LinksRepository extends Repository<Link> {

}