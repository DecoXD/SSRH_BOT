import { ICandidateAttributes } from "../../interfaces/auth"

export type IUserServiceProtocol = {
    registerUser(userData:ICandidateAttributes):Promise<ICandidateAttributes>;
    getUserById(id:string):Promise<ICandidateAttributes >;
    getUserByEmail(email:string):Promise<ICandidateAttributes | null>;
    getAllUsers():Promise<ICandidateAttributes[]|null>;
    updateUser(id:string,data:ICandidateAttributes):Promise<void>;
    unregisterUser(id:string):Promise<void>;
}


