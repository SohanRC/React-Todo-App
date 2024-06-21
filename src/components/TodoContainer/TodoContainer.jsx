import React from 'react';
import {Todo} from "../index"
import useTodo from '../../context/TodoContext';
import useChoice from '../../context/ChoiceContext';
function TodoContainer() {
    const { todos } = useTodo();
    const { choiceType } = useChoice();
    return ( 
        <div className='flex flex-col justify-center flex-wrap mt-5 items-center gap-[1rem] my-5'>
            {
                todos.map((todo)=> (todo.type.toUpperCase() === choiceType.toUpperCase()) ? <Todo todo={todo} key={todo.id} /> : "")
            }
        </div>
     );
}

export default TodoContainer;