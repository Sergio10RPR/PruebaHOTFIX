import {Request,Response } from 'express';
import pool from '../database/database';

class EmpleadoControlador {
    
    /**######### READ ######## */
    public async read(req:Request,res:Response){
        const games = await pool.query('SELECT * FROM empleado');
        res.json(games);

    }
}

const empleadoControlador = new EmpleadoControlador();
export default empleadoControlador;