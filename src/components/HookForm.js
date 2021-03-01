import React, { useState } from 'react';
import { useForm } from 'react-hook-form';



const FormCrud = () => {

    const {register, errors, handleSubmit} = useForm();

    const [entradas, setentradas] = useState([]);

    const procesarFormulario = (data, e) => {
        console.log(data);
        setentradas([
            ...entradas,
            data
        ])
        // limpiar campos
        e.target.reset();
    }

    return (
        <div className="Login-page">
            
            <form onSubmit={handleSubmit(procesarFormulario)}
            className="form-hhl">
                <input
                    name="Email"
                    ref={
                        register({
                            required: {value:true, message: 'no ha ingresado titulo'}
                        })
                    }                
                    placeholder="Enter Email"
                ></input>

                
                <span>
                    {errors?.Email?.message}
                </span>
                <input
                    name="password"
                    type="password"
                    ref={
                        register({
                            required: {value:true, message: 'no ha ingresado password'}
                        })
                    }
                    placeholder="Ingrese descripción"
                >

                </input>
                <span>
                    
                    {errors?.password?.message}
                </span>
              <button type="submit">
                  enviar
                </button>  
            </form>


            <ul className="mt-2">
                {
                    entradas.map((item, index) =>
                        <li key={index}>
                            {item.Email} - {item.password}
                        </li>
                    )
                }
            </ul>

        </div>
    );
}
 
export default FormCrud;