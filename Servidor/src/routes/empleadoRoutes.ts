import { Router } from 'express';
import gamesController from '../controllers/empleadoControlador';

class EmpleadoRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        //this.router.get('/',(req,res)=>res.send('Games'));
        this.router.get('/',gamesController.read); //Read
        //this.router.get('/:id',gamesController.getOne);
        this.router.post('/empleado',gamesController.create); //Create
        this.router.put('/:id',gamesController.update); //Update
        this.router.delete('/:id',gamesController.delete); //Delete
        
    }
}
const empleadoRoutes = new EmpleadoRoutes();
export default empleadoRoutes.router;