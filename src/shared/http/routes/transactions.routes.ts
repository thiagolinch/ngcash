import { Router } from "express";
import { CashOutController } from "../../../modules/transactions/useCases/cashOutUseCase/cashOutController";
import { GetStatementByDateController } from "../../../modules/transactions/useCases/getStatementByDate/getStatementByDateController";
import { GetStatementController } from "../../../modules/transactions/useCases/getStatementUseCase/getStatementController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";


const transactionRoutes = Router();

const cashOutController = new CashOutController();
const getStatementController = new GetStatementController();
const getStatementByDateController = new GetStatementByDateController();

transactionRoutes.post("/", ensureAuthenticate, cashOutController.handle)
transactionRoutes.get("/statement", ensureAuthenticate, getStatementController.handle)
transactionRoutes.get("/statement-date", ensureAuthenticate, getStatementByDateController.handle)

export { transactionRoutes }