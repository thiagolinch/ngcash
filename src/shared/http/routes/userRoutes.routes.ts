import { Router } from "express";
import { CreateUserController } from "../../../modules/users/useCases/createUser/createUseController";
import { GetBalanceController } from "../../../modules/users/useCases/getBalanceUseCase/getBalanceController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";


const userRoutes = Router();

const createUserController = new CreateUserController();
const getBalanceController = new GetBalanceController();

userRoutes.post("/", createUserController.handle)
userRoutes.get("/balance", ensureAuthenticate, getBalanceController.handle)

export { userRoutes }