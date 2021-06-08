"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mainRoutes_1 = __importDefault(require("./routes/mainRoutes"));
const empleadoRoutes_1 = __importDefault(require("./routes/empleadoRoutes"));
class Servidor {
    constructor() {
        this.app = express_1.default();
        this.configuracion();
        this.rutas();
    }
    configuracion() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    rutas() {
        this.app.use('/', mainRoutes_1.default);
        this.app.use('/practica1/empleados', empleadoRoutes_1.default);
    }
    iniciar() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Ejecutando en el puerto ', this.app.get('port'));
        });
    }
}
const server = new Servidor();
server.iniciar();
