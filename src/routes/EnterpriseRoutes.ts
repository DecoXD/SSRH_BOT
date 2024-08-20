import { Router } from 'express';
import { ManageEnterpriseAccountVerificator } from '../utilities/verificators/enterprise/auth/ManageEnterpriseAccountVerificator';
import { EnterpriseManagementService } from '../services/enterprise/EnterpriseManagementService';
import { EnterpriseAuthController } from '../controllers/Enterprise/Auth/EnterpriseAuthController';
import { CredentialVerifier } from '../utilities/passwordMatch';
import { ContactService } from '../services/contact/Enterprise/ContactEnterpriseService';
import { AddressEnterpriseService } from '../services/address/Enterprise/AddressService';
const router = Router()

function createEnterpriseController(){
  const contactService = new ContactService()
  const addressService = new AddressEnterpriseService()
  const service = new EnterpriseManagementService(contactService,addressService)
  const credentialVerifier = new CredentialVerifier()
  const verificator = new ManageEnterpriseAccountVerificator(service,credentialVerifier)
  const controller = new EnterpriseAuthController(service,verificator)
  //i'm here
  return controller
}

const controller = createEnterpriseController()


router.post('/create',controller.createEnterpriseAccount.bind(controller))


export {router}