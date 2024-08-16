import { Request } from "express";
import { HttpException } from "../../../exceptions/HttpException";
import { OpportunitieAttributes } from "../../../interfaces/opportunitie";
import { IUserServiceProtocol } from "../../../services/auth/IUserService";
import { IOpportunitieServiceProtocol } from "../../../services/opportunitie/IOpportunitieService";
import { TokenManipulator } from "../../Token";
import { ITokenManipulator } from "../../interfaces";
import { IOpportunitieVerificatorProtocol } from "./IOpportunitieVerificatorProtocolt";
import { allFieldsAreFilled } from "../../checkFields";

export class OpportunitieVerificator implements IOpportunitieVerificatorProtocol{

  constructor(
    private opportunitieService:IOpportunitieServiceProtocol,
    private userService:IUserServiceProtocol,
    private tokenManipulator:ITokenManipulator){

  }



  async verifyUserPermissions(userId:string){
    try {
      const user = await this.userService.getUserById(userId)
      // const adminCode = process.env.APP_ADMIN_CODE
      
      // if(user.role != adminCode){
      //   throw new HttpException('você não tem permissão para realizar essa operação',403)
      // }
      return true
    } catch (error) {
      if(error instanceof HttpException){
        throw new HttpException(error.message,error.statusCode)
      } 
      throw new HttpException('System Error',501)
    }
  }

  async addOpportunitieVerificator(req:Request,opportunitie: OpportunitieAttributes): Promise<string> {
    try {
      //verificar se todos os campos estão preenchidos 
    
      const fieldsAreFilled = allFieldsAreFilled(opportunitie)
      
      if(!fieldsAreFilled) throw new HttpException('Por favor Preencha todos os campos',404)
      //pegar o id do usuário pelo token e verificar se ele tem permissão de ADMIN
      const token = await this.tokenManipulator.getToken(req)
      const {userId} = await this.tokenManipulator.getUserByToken(token)
      if(!userId) throw new HttpException('você nao possui permissão para realizar essa operação',403)
      this.verifyUserPermissions(userId)
      return userId
    } catch (error) {
      if(error instanceof HttpException){
        throw new HttpException(error.message,error.statusCode)
      } 
      throw new HttpException('System Error',501)
    }

  }

  async deleteOpportunitieVerificator(opportunitie: OpportunitieAttributes): Promise<void> {
    //verificar permissão do usuário 
  }

  async updateOpportunitieVerificator(opportunitie: OpportunitieAttributes): Promise<void> {
    //verificar se todos os campos estão preenchidos 
    //verificar permissão do usuário
  }
}