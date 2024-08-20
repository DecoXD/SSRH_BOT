import { Request, Response } from "express";
import { IEnterpriseAuthAttributes } from "../../../interfaces/Enterprise";
import { IEnterpriseAuthControllerProtocol } from "./IEnterpriseAuthController";
import { IEnterpriseManagementService } from "../../../services/enterprise/IEnterpriseManagementService";
import { IManageEnterpriseAccountVerificator } from "../../../utilities/verificators/enterprise/auth/IManageEnterpriceAccountVerificator";
import { IAddressEnterpriseServiceProtocol } from "../../../services/address/Enterprise/IAddressEnterpriseService";
import { IContactEnterpriseServiceProtocol } from "../../../services/contact/Enterprise/IContactEnterpriseService";
import { HttpException } from "../../../exceptions/HttpException";



export class EnterpriseAuthController implements IEnterpriseAuthControllerProtocol {

  constructor(
    private enterpriseService:IEnterpriseManagementService,
    private verificator:IManageEnterpriseAccountVerificator,
    
  ){

  }

  async createEnterpriseAccount(req:Request,res:Response): Promise<Response> {

    const {enterpriseData,contact,address} = req.body
    
    try {
      await this.enterpriseService.registerWithContactAndAddress(enterpriseData,address,contact)
      return res.status(200).json({message:'empresa cadastrada com sucesso'})
    } catch (error) {
      if(error instanceof HttpException){
        return res.status(error.statusCode).json({message:error.message})
      } else{
       return  res.status(500).json({message:'system error' + error.message})
      }
    }
 
  }

  //falta metodo get


  async deleteEnterpriseAccount(req:Request,res:Response): Promise<Response> {
    return res
  }
  async updateEnterpriseAccount(req:Request,res:Response): Promise<Response> {
    return res
  }
}