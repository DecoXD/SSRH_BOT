import { Request } from "express"

export type ITokenManipulator = {
  createToken(id:string):Promise<string | void>
  verifyToken(req:Request):Promise<boolean|void>
  getToken(req:Request):Promise<string>
  getUserByToken(token:string)
}

export type ICredentialVerifier = {
  passwordMatch(userPassword:string,password:string):Promise<boolean>
  validAdminKey(data:string,admin_key:string):Promise<boolean>
}