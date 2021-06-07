"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadoControlador_1 = __importDefault(require("../controllers/empleadoControlador"));
class EmpleadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/',(req,res)=>res.send('Games'));
        this.router.get('/', empleadoControlador_1.default.read); //Read
        //this.router.get('/:id',gamesController.getOne);
        this.router.post('/', empleadoControlador_1.default.create); //Create
        this.router.put('/:id', empleadoControlador_1.default.update); //Update
        this.router.delete('/:id', empleadoControlador_1.default.delete); //Delete
    }
}
const empleadoRoutes = new EmpleadoRoutes();
exports.default = empleadoRoutes.router;
