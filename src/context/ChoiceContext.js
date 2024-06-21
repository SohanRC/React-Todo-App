import React from 'react';
import { createContext, useContext } from 'react';

export const ChoiceContext = createContext({
    choiceType: "PERSONAL",
    setChoice: (choice) => { },
});

export const ChoiceProvider = ChoiceContext.Provider;

export default function useChoice() {
    return useContext(ChoiceContext)
}