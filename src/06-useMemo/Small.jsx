import { memo } from "react"

//Con el memo se puede memorizar un componente y de esta forma evitar que se cargue muchas veces e innecesariamente
//en este caso no se debe re renderizar cuando se realizo un cambio en el padre y no afecto a este componente
//si sus props no cambiaron
export const Small = memo(({counter}) => {    
    console.log("se cargo de nuevo");
        return (
        <small>{counter}</small>
        )
    }
); 
