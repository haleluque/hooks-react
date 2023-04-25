import { useFetch } from "../hooks"
import { IsLoading } from "./IsLoading";
import { Quotes } from "./Quotes";

export const MultipleCustomHooks = () => {

    const url = 'https://api.breakingbadquotes.xyz/v1/quotes';
    const {data, isLoading, hasError, invokeService} = useFetch(url);

    //JS, si la data tiene elementos sacar el primero
    //NO SE PUEDE desestructurar de null, pero si de cualquier objeto, incluso un false
    //con el doble !! se convierte de null a false, ya que !undefined = true
    const {author, quote} = !!data && data[0];

  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
            isLoading ? <IsLoading /> : <Quotes author={author} quote={quote} />
        }

        <button 
            className="btn btn-primary" 
            onClick={invokeService}>
                Next Quote
        </button>
    </>
  )
}
