import { Request, Response } from "express"


export type IOpportunitiesControllerProtocol = {
  getAllOpportunities(req: Request, res: Response):Promise<Response>
  getOpportunitieById(req:Request,res:Response):Promise<Response>
  addOpportunitie(req:Request,res:Response):Promise<Response>
  updateOpportunitieData(req:Request,res:Response):Promise<Response>
  deleteOpportunitie(req:Request,res:Response):Promise<Response>
  // updateProductQuanty(req:Request,res:Response):Promise<void> ta mais para o controlador do carrinho


}