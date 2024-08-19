import { Router } from 'express';
import { ManageEnterpriseAccountVerificator } from '../utilities/verificators/enterprise/auth/ManageEnterpriseAccountVerificator';
import { EnterpriseManagementService } from '../services/enterprise/EnterpriseManagementService';
import { EnterpriseAuthController } from '../controllers/Enterprise/Auth/EnterpriseAuthController';
import { CredentialVerifier } from '../utilities/passwordMatch';
import { ContactService } from '../services/contact/Enterprise/ContactEnterpriseService';
import { AddressEnterpriseService } from '../services/address/Enterprise/AddressService';
const router = Router()

function createEnterpriseController(){
  const service = new EnterpriseManagementService()
  const credentialVerifier = new CredentialVerifier()
  const verificator = new ManageEnterpriseAccountVerificator(service,credentialVerifier)
  const contactService = new ContactService()
  const addressService = new AddressEnterpriseService()
  const controller = new EnterpriseAuthController(service,verificator,contactService,addressService)
  //i'm here
  return controller
}

const controller = createEnterpriseController()


router.post('/create',controller.createEnterpriseAccount.bind(controller))


export {router}