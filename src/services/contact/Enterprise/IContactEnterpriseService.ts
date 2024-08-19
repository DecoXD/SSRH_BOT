export type IContactEnterpriseServiceProtocol = {
  create():Promise<void>
  read():Promise<void>
  update():Promise<void>
  delete():Promise<void>
}