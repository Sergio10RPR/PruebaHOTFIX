import { Router } from 'express';
import { indexController } from '../controllers/mainControlador';

class MainRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',indexController.index);
        
    }
}
const mainRoutes = new MainRoutes();
export default mainRoutes.router;