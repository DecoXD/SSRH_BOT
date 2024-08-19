import { Request, Response } from "express";
import { IEnterpriseAuthAttributes } from "../../../interfaces/Enterprise";
import { IEnterpriseAuthControllerProtocol } from "./IEnterpriseAuthController";
import { IEnterpriseManagementService } from "../../../services/enterprise/IEnterpriseManagementService";
import { IManageEnterpriseAccountVerificator } from "../../../utilities/verificators/enterprise/auth/IManageEnterpriceAccountVerificator";



export class EnterpriseAuthController implements IEnterpriseAuthControllerProtocol {

  constructor(
    enterpriseService:IEnterpriseManagementService,
    verificator:IManageEnterpriseAccountVerificator,
    private addressService,
    private contaceService
  ){

  }

  async createEnterpriseAccount(req:Request,res:Response): Promise<Response> {

    const {enterpriseData,contact,address} = req.body
    
    try {
      
      res.status(200).json({message:'empresa cadastrada com sucesso'})
    } catch (error) {
      
    }
    return res
  }

  //falta metodo get


  async deleteEnterpriseAccount(req:Request,res:Response): Promise<Response> {
    return res
  }
  async updateEnterpriseAccount(req:Request,res:Response): Promise<Response> {
    return res
  }
}