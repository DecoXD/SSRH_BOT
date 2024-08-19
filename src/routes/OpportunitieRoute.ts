import { Router } from "express";
import { IOpportunitieServiceProtocol } from "../services/opportunitie/IOpportunitieService";
import { IOpportunitiesControllerProtocol } from "../controllers/opportunities/IOpportunitiesController";
import { OpportunitiesController } from "../controllers/opportunities/OpportunitiesController";
import { OpportunitieService } from "../services/opportunitie/OpportunitieService";
import { OpportunitieVerificator } from "../utilities/verificators/opportunitie/OpportunitieVerificator.ts";
import { UserService } from "../services/auth/UserService";
import { TokenManipulator } from "../utilities/Token";

const OpportunitieRouter = Router()

function getOpportunitieController():IOpportunitiesControllerProtocol{
  const service = new OpportunitieService()
  const userService = new UserService()
  const tokenManipulator =  new TokenManipulator()
  const verificator = new OpportunitieVerificator(service,userService,tokenManipulator)
  
  const controller = new OpportunitiesController(service,verificator)
  return controller
}


const controller = getOpportunitieController()

OpportunitieRouter.post('/create',controller.addOpportunitie.bind(controller))
OpportunitieRouter.get('/',controller.getAllOpportunities.bind(controller))

export {OpportunitieRouter}