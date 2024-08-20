import { IAddressAttributes } from "../../../interfaces/Enterprise";
import { IAddressEnterpriseServiceProtocol } from "./IAddressEnterpriseService";

export class AddressEnterpriseService implements IAddressEnterpriseServiceProtocol{

  async create(data:IAddressAttributes,enterprise_id:string,prismaClient): Promise<void> {
    try {
      const addressData = Object.assign(data,{enterprise_id})
      await prismaClient.enterprise_address.create({
        data:addressData
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