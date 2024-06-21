import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useTodo from '../../context/TodoContext';
import useForm from '../../context/FormContext';

function Todo({ todo }) {
    const { deleteTodo, setCompleted, editTodo } = useTodo();

    return ( 
        <div className={`min-w-[60%]
        text-[1.2rem] px-3 py-2 ${todo.completed ? `bg-green-500`: `bg-slate-600` } b gap-1
        grid grid-cols-[0.2fr_2fr_0.5fr] grid-rows-auto 
        rounded-md`}
        >
            <input type="checkbox" name="" id="" className='w-5 h-5 mx-auto my-auto rounded-md border-2 border-blue-950 cursor-pointer'
                checked={todo.completed ? true : false}
            onChange={() => {
                setCompleted(todo.id)
            }}/>
            <div className='font-serif text-white text-2xl  tracking-wide text-wrap text-center flex items-center flex-wrap'>
                {todo.todoText}
            </div>
            <div className='import { MdDelete } from "react-icons/md"; flex justify-center gap-2 flex-wrap'>
                <button className='text-white text-3xl hover:opacity-50 transition-opacity duration-100' disabled={todo.completed ? true : false}
                    onClick={() => {
                        editTodo(todo.id, todo.todoText)
                    }}
                >
                    <FaRegEdit />
                </button>
                <button className='text-white text-3xl hover:opacity-50 transition-opacity duration-100' onClick={() => {
                    deleteTodo(todo.id)
                }}>
                    <MdDelete />
                </button>
            </div>
        </div>
     );
}

export default Todo;