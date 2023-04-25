import { useState } from "react";

export const useForm = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm)

    const onImputChange = ({target}) => {
        const {name, value} = target;
        //De esta forma buscamos dentro del objeto x name y le asignamos el nuevo valor
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }    

    return {
        ...formState,
        formState,
        onImputChange,
        onResetForm
    };
}
