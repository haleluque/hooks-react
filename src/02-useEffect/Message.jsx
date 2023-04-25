import { useEffect, useState } from "react"

export const Message = () => {


    const [coords, setCoords] = useState({x:0, y:0})
    // En este ejemplo, se esta creando un event listener con una referencia de memoria apuntando auna function
    // y dentro del mismo useEffect, se remueve una vez el componente se desmonta, de esta forma se evnita la crewacion
    // de muchos listener o fugas de memoria
    useEffect(() => {
      
        const onMouseMove = ({x, y}) => {
            setCoords({x,y});
        }

        window.addEventListener('mousemove', onMouseMove);
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    

  return (
    <>
        <h3>Usuario Ya Existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}
