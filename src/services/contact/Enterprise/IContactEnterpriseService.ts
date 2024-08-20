
import { IContactAttributes } from "../../../interfaces/Enterprise"

export type IContactEnterpriseServiceProtocol = {
  create(contact:IContactAttributes,enterprise_id:string,prismaClient):Promise<void>
  read():Promise<void>
  update():Promise<void>
  delete():Promise<void>
}