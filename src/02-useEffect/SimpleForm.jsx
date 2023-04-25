import { useState,useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'henry',
        email: 'email@email.com'
    })

    const {username, email} = formState;

    const onImputChange = ({target}) => {
        const {name, value} = target;
        //De esta forma buscamos dentro del objeto x name y le asignamos el nuevo valor
        setFormState({
            ...formState,
            [name]: value
        });
    }

    // el primer param es el callback que se llamara
    // el segundo param son las dependencias o condiciones para que se vuelva a llamaar
    // en este efecto, cada vez que se actualice el formstate, se volver a ejecutar el effect
    useEffect(() => {
      
    }, [formState])    

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        
        <input type="text"
            className="form-control"
            placeholder="Userame"
            name="username"
            value={username}
            onChange={onImputChange} />

        {
            (username == 'henry') && <Message />
        }

        <input type="email"
            className="form-control mt-2"
            placeholder="abc@abc.com"
            name="email"
            value={email}
            onChange={onImputChange} />
    </>
  )
}
