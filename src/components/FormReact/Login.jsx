
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import "./form.css"; 


const Form = ()=> {
    const { register, errors, handleSubmit} = useForm();
    const [entradas, setEntradas] = useState([]);

    const FormSubmit = (data, e) => {
        console.log(data);
            setEntradas([
                ...entradas,
                data
            ])

            e.target.reset();
 
    }
    return(
        <div className="login-form">
            <form onSubmit={handleSubmit(FormSubmit)}
                    className="form-hh">
                <input
                    name="Email"
                    placeholder="Ingrese su email"
                    className="imput-form"
                        ref={
                            register({
                                required:{
                                    value:true,
                                    message: "no ha ingresado su email"}    
                            })                        }
                    />
                    <span>
                        {errors?.Email?.message}
                    </span>
                <input className="imput-form"
                        name="password"
                        type="password"
                        placeholder="ingrese su password"
                        ref={
                            register({
                                required:{
                                    value:true,
                                    message:"no ha ingresado password"

                                }
                            })
                        }
                />
                <span>
                    {errors?.password?.message}
                </span> 

                <button type="submit"
                        className="button">
                    Join
                </button>

                <ul className="lista">
                    {
                        entradas.map((item, index) =>
                        <li key= {index}>
                            {item.Email} - {item.password}
                        </li>
                        )
                      
                    }
                </ul>
            </form>
        </div>

    );
}

export default Form;
