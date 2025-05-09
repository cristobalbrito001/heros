import { useState } from 'react';

export const useForm = <T extends Record<string, unknown>>( initialForm = {} as T ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}