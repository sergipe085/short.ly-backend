import { Router } from "express";

import LinkRoutes from "./links.routes";

const routes = Router();

routes.use("/links", LinkRoutes);

export { routes };