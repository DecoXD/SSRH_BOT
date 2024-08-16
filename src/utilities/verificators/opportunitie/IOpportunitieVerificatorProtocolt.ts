import { Request } from "express";
import { OpportunitieAttributes } from "../../../interfaces/opportunitie";

export type IOpportunitieVerificatorProtocol = {
  addOpportunitieVerificator(req:Request,opportunitie:OpportunitieAttributes):Promise<string>;
  updateOpportunitieVerificator(opportunitie:OpportunitieAttributes):Promise<void>;
  deleteOpportunitieVerificator(opportunitie:OpportunitieAttributes):Promise<void>
}