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

    /**######### UPDATE ######## */
    public async update(req:Request,res:Response){
        const { id } = req.params;
        await pool.query('UPDATE empleado set ? WHERE id = ?',[req.body,id]);
        res.json({text: 'Empleado Actualizado'});
       
    }
    
}

const empleadoControlador = new EmpleadoControlador();
export default empleadoControlador;