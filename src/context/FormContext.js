import React from 'react';
import { createContext, useContext } from 'react';

export const FormContext = createContext({
    formContext: "",
    setForm: () => { },
})

export const FormContextProvider = FormContext.Provider;

export default function useForm() {
    return useContext(FormContext)
}