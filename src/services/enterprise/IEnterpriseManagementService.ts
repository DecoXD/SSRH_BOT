import { IAddressAttributes, IContactAttributes, IEnterpriseAuthAttributes } from "../../interfaces/Enterprise"

export type IEnterpriseManagementService = {
  registerWithContactAndAddress(enterprise:IEnterpriseAuthAttributes,address:IAddressAttributes,contact:IContactAttributes):Promise<void>
  getById():void
  
}