import { useLayoutEffect, useRef, useState } from "react"

export const Quotes = ({author, quote}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width:0, height:0})


  //es el mismo del useEffect, pero de forma asíncrona luego de haber renderizado todo el DOM
  useLayoutEffect(() => {
    //Con el uso del useRef para tener la referencia del parrafo en el html
    //vamos a saber cuanto espacio esta necesitando
    //console.log(pRef.current.getBoundingClientRect());
    const {width, height} = pRef.current.getBoundingClientRect();
    setBoxSize({
      width,
      height
    });
  }, [quote])

  return (
    <>
        <blockquote className="blockquote text-end"
          style={{
            display:'flex'
          }}>
            <p ref={pRef} className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>

        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
