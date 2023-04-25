import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  
    const [counter, setcounter] = useState(initialValue);

    // para poder exponer funciones hacia afuera del hook mismo hay varias formas
    //solo hacer una funcion y retornarla hacia el hook
    const increment = (value = 1) => {
        setcounter(counter + value);
    }
  
    return {
        counter,
        increment
    };
}
