import pool from "../../config/db.js"
import * as queries from "./queries.js"

export const getAll = (req,res) =>{
    pool.query(queries.getAll,(error,results) => {
        if (error) res.status(404).json({message:error.message})
        else res.status(200).json(results.rows)
    })
}

export const getById = (req,res) =>{
    const id = req.params.id ;
    pool.query(queries.getById,[id],(error,results) => {
        if (error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"Airport not found."})
        else res.status(200).json(results.rows[0])
    })
}

export const add = (req,res) =>{
    const {name,code,city,country,airportManagementId,planeCapacity,yearBuilt} = req.body
    pool.query(queries.checkAirportExist,[code],(error,results)=>{
        if(error) res.status(404).json({message:error.message})
        else if(results.rows.length) res.status(404).json({message:"Airport already exists."})
        else {
            pool.query(queries.add,[name,code,city,country,airportManagementId,planeCapacity,yearBuilt],(error,results)=>{
                if(error) res.status(404).json({message:error.message})
                else res.status(201).json(results.rows)
            })
        }
    })
}

export const update = (req,res) =>{
    const {id} = req.params
    const values = [req.body.name,req.body.code,req.body.city,req.body.country,id]
    pool.query(queries.update,values,(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"Airport not found."})
        else res.status(200).json({updatedAirport:results.rows[0]})
    })
}

export const deleteOne = (req,res) =>{
    const {id} = req.params
    pool.query(queries.deleteOne,[id],(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"Airport not found."})
        else res.status(200).json({deletedAirport:results.rows[0]})
    })
}