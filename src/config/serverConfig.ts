import express, { Express} from "express";
import AuthRouter from "../routes/AuthRoute";
import { OpportunitieRouter } from "../routes/OpportunitieRoute";
import { router as EnterpriseRouter } from "../routes/EnterpriseRoutes";

export class ServerSetup {
    private server:Express 
    constructor(){
        this.server = express()
    }
    startServer(){
        this.boot()
    }

    private boot(){
        this.server.use(express.json())
        this.server.use(express.urlencoded({
            extended:true
        }))
        this.server.use('/',AuthRouter)
        this.server.use('/opportunities',OpportunitieRouter)
        this.server.use('/enterprise',EnterpriseRouter)
        this.server.listen(3000,() => {
            console.log('server are ready')
        })
    }
}