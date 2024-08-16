import { Request, Response } from "express";
import { IOpportunitieServiceProtocol } from "../../services/opportunitie/IOpportunitieService";
import { IOpportunitiesControllerProtocol } from "./IOpportunitiesController";
import { IOpportunitieVerificatorProtocol } from "../../utilities/verificators/opportunitie/IOpportunitieVerificatorProtocolt";
import { ITokenManipulator } from "../../utilities/interfaces";
import { HttpException } from "../../exceptions/HttpException";


export class OpportunitiesController implements IOpportunitiesControllerProtocol{
  constructor(
    private service:IOpportunitieServiceProtocol,
    private verificator:IOpportunitieVerificatorProtocol,
    ){
    
  }

  async getAllOpportunities(req: Request, res: Response):Promise<Response>{
    try {
      const opportunitieList = await this.service.getAll()
      return res.status(201).json({opportunitieList})
    } catch (error) {
      res.status(500).json({message:error.message})
    }
    return  
  }

  async getOpportunitieById(req: Request, res: Response): Promise<Response> {
    const {id} = req.body
    try {
      const opportunitie = await this.service.getOpportunitieById(id) 
      res.status(201).json({opportunitie})
    } catch (error) {
      if(error instanceof HttpException){
       return res.status(error.statusCode).json({message:error.message})
      }
      return res.status(501).json({message:'systemError'})
    }
    return 
  }

  async addOpportunitie(req: Request, res: Response): Promise<Response> {
   
    const {
      title,
      description,
      salary,
      requirements,
      status,
      opportunity_type,} = req.body;
    //
    const opportunitieData = {
     title,
     description,
     salary,
     requirements,
     status,
     opportunity_type

    }

    try {
      const userId = await this.verificator.addOpportunitieVerificator(req,opportunitieData)
      Object.assign(opportunitieData,{userId})

      const opportunitie = await this.service.saveOpportunitie(opportunitieData)
      
     
      return res.status(200).json({message:'produto cadastrado com sucesso !',opportunitie})
      
    } catch (error) {
      return res.status(500).json({message:error.message})
    }

    return  
  }

  async deleteOpportunitie(req: Request, res: Response): Promise<Response> {
    try {
      const {id} = req.body
      await this.service.deleteOpportunitie(id)
      return res.status(201).json({message:'produto deletado com sucesso'})
    } catch (error) {
      return res.status(500).json({message:error.message})
    }
  }

  async updateOpportunitieData(req: Request, res: Response): Promise<Response> {
    const data = req.body
    const {id} = req.params
    try {
      //warning
      await this.service.updateOpportunitie(Number(id),data)
      return res.status(201).json({message:'item atualizado com sucesso'})
    } catch (error) {
      return res.status(500).json(error.message)
      
    }
  }

 
}