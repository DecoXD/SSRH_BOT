/* eslint-disable */
import { Request, Response } from "express";

export type IUserAttributes = {
    name:string,
    email:string,
    password:string,
    admin_key:string
    id?:string

}
export type IUserLoginAttributes = {
    email:string,
    password:string,
}



