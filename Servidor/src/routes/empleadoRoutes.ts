import { Router } from 'express';
import empleadoControlador from '../controllers/empleadoControlador';

class EmpleadoRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',empleadoControlador.read); //Read
        
    }
}
const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;