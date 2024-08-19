import { Request, Response } from "express"
import { IEnterpriseAuthAttributes } from "../../../interfaces/Enterprise"

export type IEnterpriseAuthControllerProtocol = {
  createEnterpriseAccount(req:Request,res:Response):Promise<Response>
  updateEnterpriseAccount(req:Request,res:Response) :Promise<Response>
  deleteEnterpriseAccount(req:Request,res:Response) :Promise<Response>
}