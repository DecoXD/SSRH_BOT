import { prismaClient } from "../../config/dbConfig";
import { HttpException } from "../../exceptions/HttpException";
import { OpportunitieAttributes } from "../../interfaces/opportunitie";
import { IOpportunitieServiceProtocol } from "./IOpportunitieService";

export class OpportunitieService implements IOpportunitieServiceProtocol{
  
  async deleteOpportunitie(id: number): Promise<void> {
    try {
      await prismaClient.opportunities.delete({
        where:{
          id
        }
      })
    } catch (error) {
      throw new HttpException(`system error ${error.message}`,501)
    }
  }

  async getAll(){
    
    try {
      const opportunitie = await prismaClient.opportunities.findMany()
      if(!opportunitie) new HttpException("nenhum produto encontrado",404)
      return opportunitie
    } catch (error) {
      if(error instanceof HttpException){
        throw new HttpException(error.message,error.statusCode)
      }
      throw new HttpException('Server Error',500)
    }
  }

  async getAllOpportunitiesByCategory(category: string, order?: string): Promise<OpportunitieAttributes[]> {
    try {
      const opportunitie = await prismaClient.opportunities.findMany({
        where:{
          opportunity_type:category,
          
        }
      })
      if(!opportunitie) throw new HttpException('Not Found',404)
      return opportunitie
    } catch (error) {
      if(error instanceof HttpException){
        throw new HttpException(error.message,error.statusCode)
      } 
      throw new HttpException('System Error',501)
    }
  }

  async getOpportunitieById(opportunitieId: number): Promise<OpportunitieAttributes> {
    try {
      const opportunitie = await prismaClient.opportunities.findUnique({
        where:{
          id:opportunitieId
        }
      })
      if(!opportunitie) throw new HttpException('Not Found',404)
      return opportunitie
    } catch (error) {
      if(error instanceof HttpException){
        throw new HttpException(error.message,error.statusCode)
      } 
      throw new HttpException('System Error',501)
    }
  }

  async saveOpportunitie(opportunitie): Promise<OpportunitieAttributes> {
    try {
      const newOpportunitie = await prismaClient.opportunities.create({
        data:opportunitie
      })
      if(!newOpportunitie) throw new HttpException('Erro ao cadastrar produto',409)
      return newOpportunitie
    } catch (error) {
      console.log(error.message)
    }
  }

  async updateOpportunitie(id: number,data:OpportunitieAttributes): Promise<void> {
    try {
      const opportunitie = await prismaClient.opportunities.update({
        data:data,
        where:{
          id:id
        }
      })
      if(!opportunitie) throw new HttpException('Erro ao atualizar o produto',404)
    } catch (error) {
      if(error instanceof HttpException){
        throw new HttpException(error.message,error.statusCode)
      } throw new HttpException('ocurred a system error when your opportunitie are been updated',501)
    }
  }
}