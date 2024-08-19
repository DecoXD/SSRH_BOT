import { Request, Response } from "express";
import { IEnterpriseAuthAttributes } from "../../../interfaces/Enterprise";
import { IEnterpriseAuthControllerProtocol } from "./IEnterpriseAuthController";



export class EnterpriseAuthController implements IEnterpriseAuthControllerProtocol {
  async createEnterpriseAccount(req:Request,res:Response): Promise<Response> {
    const {
      name,              
      email,              
      password,              
      cnpj,              
      owner,              
      corporate_name,          
    } = req.body
    
    try {
      
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