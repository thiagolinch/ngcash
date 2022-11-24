import { Router } from "express";
import { accountRoutes } from "./accountRoutes.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { userRoutes } from "./userRoutes.routes";

const routes = Router();

routes.use("/accounts", accountRoutes)
routes.use("/users", userRoutes)
routes.use(authenticateRoutes)

export { routes }