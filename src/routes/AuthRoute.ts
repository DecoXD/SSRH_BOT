import { Router } from "express";
import { UserService } from "../services/auth/UserService";
import { CreateUserVerificator } from "../utilities/verificators/auth/CreateUserVerificator";
import { IUserAuthControllerProtocol } from "../controllers/Admin/Auth/IUserController";
import { UserController } from "../controllers/Admin/Auth/UserController";
import { TokenManipulator } from "../utilities/Token";
import { CredentialVerifier } from "../utilities/passwordMatch";

function getUserController():IUserAuthControllerProtocol{ // retirar isso daqui imediatamente
    const userService = new UserService()
    const credentialVerifier = new CredentialVerifier()
    const userVerificator = new CreateUserVerificator(userService,credentialVerifier)
    const tokenManipulator = new TokenManipulator()
    const userController = new UserController(userService,userVerificator,tokenManipulator)
    return userController
}

//Put him in an factory function that returns an complete controller instance or in a factory class that return every auth controller that i'll use

const userController = getUserController()

const router = Router()

router.post('/createaccount',userController.createUser.bind(userController))
router.post('/signin',userController.toAccessUser.bind(userController))


export default router