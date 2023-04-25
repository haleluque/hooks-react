import { useRef } from "react"

export const FocuScreen = () => {

    const onClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    //useRef permite mantener una referencia, y cuando esa referencia cambia, no causa una renderizacion
    const inputRef = useRef();

    return (
        <>
            <h1>FocuScreen</h1>
            <hr />
            <input 
                ref={inputRef}
                type="text"
                placeholder="Ingrese Su Nombre"
                className="form-control"/>

            <button 
            className="btn btn-primary mt-2"
            onClick={onClick}>Set Focus</button>
        </>
    )
}
