import bcrypt from 'bcrypt';
import { HttpException } from '../exceptions/HttpException';

export async function passwordMatch(userPassword:string,password:string):Promise<boolean> {
  
  const passwordMatch = await bcrypt.compare(password,userPassword)
  
  if(!passwordMatch) throw new HttpException('email or password are incorrect2',401)
  return true


}

export class CredentialVerifier {

  async passwordMatch(userPassword:string,password:string):Promise<boolean> {

    const passwordMatch = await bcrypt.compare(password,userPassword)
    
    if(!passwordMatch) throw new HttpException('email or password are incorrect2',401)
    return true
  
  }

  async validAdminKey(data:string,admin_key:string):Promise<boolean> {

    const adminKeyIsValid = await bcrypt.compare(data,admin_key)
    
    if(!adminKeyIsValid) throw new HttpException('incorrect credentials',401)
    return true
  
  }
}