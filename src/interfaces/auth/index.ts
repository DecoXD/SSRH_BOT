/* eslint-disable */
import { Request, Response } from "express";

export type ICandidateAttributes = {
    name:string,
    email:string,
    password:string,
    id?:string
    role?:string
}

export type ICandidateLoginAttributes = {
    email:string,
    password:string,
}



