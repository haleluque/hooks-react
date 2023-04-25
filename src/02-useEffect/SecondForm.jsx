import { useForm } from "../hooks/useForm"

export const SecondForm = () => {    

    //Retornando el objeto con spread operator, podemos acceder directamente a los campos
  const {onResetForm, onImputChange, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
  });


  return (
    <>
        <h1>Second Form</h1>
        <hr />
        
        <input type="text"
            className="form-control"
            placeholder="Userame"
            name="username"
            value={username}
            onChange={onImputChange} />

        <input type="email"
            className="form-control mt-2"
            placeholder="abc@abc.com"
            name="email"
            value={email}
            onChange={onImputChange} />

        <input type="password"
            className="form-control mt-2"
            placeholder="constraseña"
            name="password"
            value={password}
            onChange={onImputChange} />
        
        <button 
            className="btn btn-primary mt-2"
            onClick={onResetForm}>Borrar</button>
    </>
  )
}
