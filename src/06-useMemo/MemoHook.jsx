import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Itera...");
    }

    return `Se iteró ${iterationNumber} veces`
}

export const MemoHook = () => {

    const {counter, increment} = useCounter(800);

    const [show, setShow] = useState(true);

    //el useMemo se usa principalmente para no tener que hacer un proceso o un render n veces, sin ser necesario
    //el useMemo memoriza un valor, recomendado para tareas que solo se debe hacer una vez
    //El primer argumento e suna funcion que debe retornar algo
    //El segundo parametro es cuando debe reprocesar, en este caso cuando counter cambie
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <h4>{memorizedValue}</h4>
            <button
            className="btn btn-primary"
            onClick={() => increment()}>+1</button>

            <button className="btn btn-outline-primary"
            onClick={() =>  {setShow(!show)}}>
               Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
