import { Router } from 'express';
import empleadoControlador from '../controllers/empleadoControlador';

class EmpleadoRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',empleadoControlador.read); //Read
        this.router.post('/',empleadoControlador.create); //Create
        this.router.put('/:id',empleadoControlador.update); //Update
        this.router.delete('/:id',empleadoControlador.delete); //Delete
        
    }
}
const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;