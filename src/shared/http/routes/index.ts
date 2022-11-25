import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { transactionRoutes } from "./transactions.routes";
import { userRoutes } from "./userRoutes.routes";

const routes = Router();

routes.use("/users", userRoutes)
routes.use("/transactions", transactionRoutes)
routes.use(authenticateRoutes)

export { routes }