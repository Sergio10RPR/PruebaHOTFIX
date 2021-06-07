import express,{Application} from 'express';
import cors from 'cors';
import morgan from 'morgan';

import mainRoutes from './routes/mainRoutes';
import empleadoRoutes from './routes/empleadoRoutes';

class Servidor{
    public app: Application;
    constructor(){
        this.app = express();
        this.configuracion();
        this.rutas();
    }
    
    configuracion(): void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    rutas(): void{
        this.app.use('/',mainRoutes);
        this.app.use('/practica1/empleados',empleadoRoutes);
    }
    iniciar(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Ejecutando en el puerto ',this.app.get('port'));
        });
    }
}

const server = new Servidor();
server.iniciar();