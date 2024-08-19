import { ICredentialVerifier } from "../../../interfaces";
import { IManageEnterpriseAccountVerificator } from "./IManageEnterpriceAccountVerificator";

export class ManageEnterpriseAccountVerificator implements IManageEnterpriseAccountVerificator {
    constructor(service,credentialVerifier:ICredentialVerifier){

    }
  async checkObrigatoryFields():Promise<void> {
      
    }
}