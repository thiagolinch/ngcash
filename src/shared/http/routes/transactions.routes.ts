import { Router } from "express";
import { CashOutController } from "../../../modules/transactions/useCases/cashOutUseCase/cashOutController";
import { GetStatementController } from "../../../modules/transactions/useCases/getStatementUseCase/getStatementController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";


const transactionRoutes = Router();

const cashOutController = new CashOutController();
const getStatementController = new GetStatementController();

transactionRoutes.post("/", ensureAuthenticate, cashOutController.handle)
transactionRoutes.get("/statement", ensureAuthenticate, getStatementController.handle)

export { transactionRoutes }