import { Request, Response } from "express";

export type ICandidateAuthControllerProtocol = {
  createUser(req:Request,res:Response):Promise<Response>,
  toAccessUser(req:Request,res:Response):Promise<Response>,
  // updateUserById(req:Request,res:Response):Promise<Response>,

}