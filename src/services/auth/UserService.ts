//realizar o crud aqui

/*eslint disable */
import { prismaClient } from "../../config/dbConfig";
import { HttpException } from "../../exceptions/HttpException";
import { IUserAttributes } from "../../interfaces/auth";

import { IUserServiceProtocol } from "./IUserService";
import bcrypt from 'bcrypt';



export class UserService implements IUserServiceProtocol {


  constructor(){}

  async registerUser(userData: IUserAttributes) {
    try {
      const {name,email,password,admin_key} = userData
     
      const salt = bcrypt.genSaltSync(12)
      const hashPassword = bcrypt.hashSync(password,salt)// refatorar 
      const hashAdmin_key = bcrypt.hashSync(admin_key,salt)// refatorar 
     

      
      const newUser = {
        name,
        email,
        password:hashPassword,
        admin_key
      }
      
      const user = await prismaClient.admin.create({
        data:newUser
      })
      if(!user){
        throw new HttpException('unknown error',500)
      }
      return user
    } catch (error) {
      console.log('error no registeruser')
    }
  
  
  }

  async getUserById(id:string):Promise<IUserAttributes >{
   
    const user = await  prismaClient.admin.findUnique({ where:{
      id:id
    }})
    if(!user) throw new HttpException('user not found',401)
    return user

  }

  async getUserByEmail(email:string){
   
    try {
      const user = await  prismaClient.admin.findUnique({ where:{
        email:email
        }})
        return user
    } catch (error) {
      throw new HttpException(error.message,500)
    }

  }

  async getAllUsers(): Promise<IUserAttributes[]> {
    const user = await prismaClient.admin.findMany()
    return user
  }

  async updateUser(id:string,data:IUserAttributes){
    await prismaClient.admin.update({
      where:{
        id:id
      },
      data:data

    })
  }

  async unregisterUser(id:string):Promise<void>{}
}