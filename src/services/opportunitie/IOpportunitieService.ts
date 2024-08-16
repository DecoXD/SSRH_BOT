import { OpportunitieAttributes as OpportunitieAttributes } from "../../interfaces/opportunitie"

export type IOpportunitieServiceProtocol = {
  getAll()
  getAllOpportunitiesByCategory(category:string,order?:string):Promise<OpportunitieAttributes[]>
  getOpportunitieById(opportunitieId:number):Promise<OpportunitieAttributes>
  saveOpportunitie(opportunitie:OpportunitieAttributes):Promise<OpportunitieAttributes>
  deleteOpportunitie(id:number):Promise<void>
  updateOpportunitie(id:number,data:OpportunitieAttributes):Promise<void>  
}