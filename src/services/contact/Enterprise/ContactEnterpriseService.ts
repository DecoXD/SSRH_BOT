import { IContactAttributes } from "../../../interfaces/Enterprise";
import { IContactEnterpriseServiceProtocol } from "./IContactEnterpriseService";


export class ContactService implements IContactEnterpriseServiceProtocol {
async create(contact:IContactAttributes,enterprise_id:string,prismaClient): Promise<void> {
  try {
    const data = Object.assign(contact,{enterprise_id})
    await prismaClient.enterprise_contact.create({
      data
    })
  } catch (error) {
    console.log('erro no create address',error.message)
  }
}

async read(): Promise<void> {
  
}

async update(): Promise<void> {
  
}

async delete(): Promise<void> {
  
}
}