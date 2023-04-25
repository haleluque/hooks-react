import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    // const incrementFather  = () => {
    //     setCounter(counter + 1);
    // }

    //Es parecido a un useMemo, pero para memorizar funciones
    //Solo se re renderizará cuando la funcion memorizada cambie, pero los valores dentro de la funcion memorizada, tam bien son memorizados
    //Como el componente ShowIncrement TAMBIEN está memorizado, sabe que la funcion no ha cambiado, y por lo tanto no se re renderiza
    const incrementFather = useCallback(
      (value = 1) => {
        setCounter((count) => count + value);
      },
      [],
    )
    

  return (
    <>
        <h1>useCallBack Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={() => incrementFather()} />
    </>
  )
}
