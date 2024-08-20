export type IEnterpriseAuthAttributes = {
  name: string              
  email: string              
  password: string              
  cnpj: string              
  owner: string              
  corporate_name: string 
              
}


export type IContactAttributes = {
  phone_1:string
  phone_2:string
  phone_3:string
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