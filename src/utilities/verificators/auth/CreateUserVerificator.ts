import { HttpException } from "../../../exceptions/HttpException";
import { IUserAttributes, IUserLoginAttributes } from "../../../interfaces/auth";
import { ICreateUserVerificator } from "./ICreateUserVerificator";
import { IUserServiceProtocol } from "../../../services/auth/IUserService";
import { allFieldsAreFilled } from "../../checkFields";
import { CredentialVerifier } from "../../passwordMatch";


export class CreateUserVerificator implements ICreateUserVerificator{

  constructor(private service:IUserServiceProtocol,private credentialVerifier:CredentialVerifier){}

  async getUserIfEmailAlreadyExists(email:string): Promise<IUserAttributes | undefined> {

      const user = await this.service.getUserByEmail(email)

      if(!user) return 
      
      return user
   
  }

  

  async startLoginVerification(user:IUserLoginAttributes): Promise<void> {
    try {
      
      allFieldsAreFilled(user)
      
      //check if user exists
      
      const userData = await this.getUserIfEmailAlreadyExists(user.email)
      
      if(!userData) throw new HttpException('email or password are incorrect2',401)
      //check if password match
      
      const passwordMatch = await this.credentialVerifier.passwordMatch(userData.password,user.password)
      if(!passwordMatch) throw new HttpException('email or password are incorrect2',401)
      
    } catch (error) {
        if(error instanceof HttpException){
          throw new HttpException(error.message,error.statusCode)
        } else{
          console.log(error instanceof HttpException)
          throw new HttpException('server error ',501)
        }
    }
  }



  async startRegisterVerification(user:IUserAttributes): Promise<void> {
    try {
      //check if all fields are filled
      allFieldsAreFilled(user)
      //check if email exists
      const userExists = await this.getUserIfEmailAlreadyExists(user.email)
      
      if(userExists){
        throw new HttpException('usuário ou senha incorretos register',409)
      }
    } catch (error) {
      if(error instanceof HttpException){
        throw new HttpException(error.message,error.statusCode)
      } else{
        throw new HttpException('System Error',501)
      }
    }
  }

 
}