import { Router } from "express";
import { accountRoutes } from "./accountRoutes.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { transactionRoutes } from "./transactions.routes";
import { userRoutes } from "./userRoutes.routes";

const routes = Router();

routes.use("/accounts", accountRoutes)
routes.use("/users", userRoutes)
routes.use("/transactions", transactionRoutes)
routes.use(authenticateRoutes)

export { routes }