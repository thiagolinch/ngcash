import { Router } from "express";
import { CreateAccountController } from "../../../modules/accounts/useCases/createAccount/createAccountController";


const accountRoutes = Router();

const createAccountController = new CreateAccountController()

accountRoutes.post("/", createAccountController.handle)

export { accountRoutes }