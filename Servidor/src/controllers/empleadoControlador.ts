import {Request,Response } from 'express';
import pool from '../database/database';

class EmpleadoControlador {
    
    /**######### READ ######## */
    public async read(req:Request,res:Response){
        const games = await pool.query('SELECT * FROM empleado');
        res.json(games);

    }
    /**######### CREATE ######## */
    public async create(req:Request,res:Response): Promise<void>{
       
        res.json({message: 'Empleado Guardado'});
    }
    /**######### UPDATE ######## */
    public async update(req:Request,res:Response){
        const { id } = req.params;
       
        res.json({text: 'Empleado Actualizado'});
       
    }
    /**######### DELETE ######## */
    public async delete(req:Request,res:Response): Promise<void>{
        const { id } = req.params;
       
        res.json({text: 'Empleado eliminado' + req.params.id});
    }
   
}

const empleadoControlador = new EmpleadoControlador();
export default empleadoControlador;