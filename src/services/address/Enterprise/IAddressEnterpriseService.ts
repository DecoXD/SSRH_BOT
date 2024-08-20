import { PrismaClient } from "@prisma/client"
import { IAddressAttributes } from "../../../interfaces/Enterprise"

export type IAddressEnterpriseServiceProtocol = {
  create(address:IAddressAttributes,enterprise_id:string,prismaClient):Promise<void>
  read():Promise<void>
  update():Promise<void>
  delete():Promise<void>
}