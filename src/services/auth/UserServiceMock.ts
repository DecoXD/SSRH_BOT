import { join } from "node:path";
import { ICandidateAttributes } from "../../interfaces/auth";
import { IUserServiceProtocol } from "./IUserService";
import { readFile} from "node:fs/promises";
import { fileURLToPath } from "node:url";

export class UserServiceMock implements IUserServiceProtocol{

  getPath(){
    const path =join(__dirname,'..','..','mock','db','Users.json')
    return path
  }
  async getAllUsers(): Promise<ICandidateAttributes[]|null> {
    const path =this.getPath()
    const items = (await readFile(path)).toString()
    const resolve = await JSON.parse(items)
    return resolve.Users
   
  }

  async getUserById(id: string): Promise< ICandidateAttributes> {
    const users = await this.getAllUsers()

    for(let i = 0; i < users.length;i++){
      if(users[i].id === id){
        return users[i]
      }
    }

  }

  async getUserByEmail(email: string): Promise<null | ICandidateAttributes> {
    const userList = await this.getAllUsers()
    
    for (let i = 0 ; i <userList.length;i++){
      if(userList[i].email === email){
        return userList[i]
      }
    }

    return null
  }

  async registerUser(userData: ICandidateAttributes): Promise<ICandidateAttributes> {
    return userData
  }

  async unregisterUser(id: string): Promise<void> {
    
  }

  async updateUser(id: string, data: ICandidateAttributes): Promise<void> {
    
  }
}
