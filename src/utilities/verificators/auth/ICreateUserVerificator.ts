import { IUserAttributes, IUserLoginAttributes } from "../../../interfaces/auth"

export type ICreateUserVerificator = {

  getUserIfEmailAlreadyExists(email:string):Promise<IUserAttributes | undefined>
  startLoginVerification(user:IUserLoginAttributes):Promise<void>
  startRegisterVerification(user:IUserAttributes):Promise<void>
}