import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import imagen_is from '../assets/imagen_volley_is.jpg'



const Logss = () => {
  /*hook form*/
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const isSubmit = (data) => console.log(data)
  return(
    <>
        <form onSubmit={handleSubmit(isSubmit)}>
            <div style={{ height: '100vh', width: '100vw' }}>
                <div className="username">
                    <img src={imagen_is} alt="" />
                </div>
                <div className="username">
                    <label className='fw-bold'>Usuario</label>
                    <input 
                        type = 'text' 
                        className='form-control' 
                        {...register("usuario", {required:true})}></input>
                    {errors.usuario && <span>Obligatorio</span>}
                </div>
                <div className="password">
                    <label className='fw-bold'>Contraseña</label>
                    <input 
                        type = 'password' 
                        className='form-control' 
                        {...register("contrasena", {required:true})}></input>
                    {errors.contrasena && <span>Obligatorio</span>}
                </div>
                <div className="d-flex  flex-column mt-4">
                    <button className='btn btn-outline-danger'>Ingresar</button>
                </div>
            </div>
        </form>
    </>
  );
}
export default Logss;
