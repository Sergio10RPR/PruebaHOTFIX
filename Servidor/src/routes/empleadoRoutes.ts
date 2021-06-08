import { Router } from 'express';
import empleadoControlador from '../controllers/empleadoControlador';

class EmpleadoRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',empleadoControlador.read); //Read
        this.router.post('/empleado',empleadoControlador.create); //Create
        
    }
}
const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;