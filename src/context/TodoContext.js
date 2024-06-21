import React from 'react';
import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [],
    addTodo: (todoText, choiceValue) => { },
    editTodo: () => { },
    deleteTodo: (id) => { },
    setCompleted: (id) => {},
})

export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext);
}