export type IEnterpriseAuthAttributes = {
  name: string              
  email: string              
  password: string              
  cnpj: string              
  owner: string              
  corporate_name: string 
  address_id?: number             
  contact_id?: number             
}


export type IContactAttributes = {
  phone1:string
  phone2:string
  phone3:string
}
export type IAddressAttributes = {
  street:string
  number:number
  neighborhood:string
  city:string
  state:string
  country:string
  complement:string,
  cep:string
}