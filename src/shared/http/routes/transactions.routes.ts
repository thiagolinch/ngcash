import { Router } from "express";
import { CashOutController } from "../../../modules/transactions/useCases/cashOutUseCase/cashOutController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";


const transactionRoutes = Router();

const cashOutController = new CashOutController();

transactionRoutes.post("/", ensureAuthenticate, cashOutController.handle)

export { transactionRoutes }