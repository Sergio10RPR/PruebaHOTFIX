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
        await pool.query('INSERT INTO empleado set ?',[req.body]);
        res.json({message: 'Empleado Guardado'});
    }

    
}

const empleadoControlador = new EmpleadoControlador();
export default empleadoControlador;