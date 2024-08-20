// function createEnterpriseWithContactAndAddress()

import { prismaClient } from "../../config/dbConfig";
import { HttpException } from "../../exceptions/HttpException";
import { IAddressAttributes, IContactAttributes, IEnterpriseAuthAttributes } from "../../interfaces/Enterprise";
import { IAddressEnterpriseServiceProtocol } from "../address/Enterprise/IAddressEnterpriseService";
import { IContactEnterpriseServiceProtocol } from "../contact/Enterprise/IContactEnterpriseService";
import { IEnterpriseManagementService } from "./IEnterpriseManagementService";

export class EnterpriseManagementService implements IEnterpriseManagementService {

  constructor(
    private contact:IContactEnterpriseServiceProtocol,
    private address:IAddressEnterpriseServiceProtocol
  ){

  }

  async registerWithContactAndAddress(enterprise:IEnterpriseAuthAttributes,address:IAddressAttributes,contact:IContactAttributes): Promise<void> {
    let err = null
    try {

      await prismaClient.$transaction(async(prismaClient) =>{
        //cadastrar empresa
        const newEnterprise = await prismaClient.enterprise_accounts.create({
          data:enterprise
        })
        //puxar id da empresa
     
        //passar o id da empresa para o contato e para o endereço
        const newAddress = await this.address.create(address,newEnterprise.enterprise_id,prismaClient)
        const newContact = await this.contact.create(contact,newEnterprise.enterprise_id,prismaClient)

      })
     
    } catch (error) {
      
      err = error.message
    } finally{
      prismaClient.$disconnect()
    }
    
    if(err){
      throw new Error(err)
    }
  }

  getById(): void {
    
  }

  
}