import React from 'react';
import { useState } from 'react';
import useTodo from '../../context/TodoContext';
import useChoice from '../../context/ChoiceContext';
import useForm from '../../context/FormContext';
function Form() {

    const { addTodo } = useTodo();
    const { choiceType } = useChoice();
    const { formContext, setForm } = useForm();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        addTodo(formContext);
        setForm("");
    }
    return (
        <>
            <div className='flex justify-center mx-auto flex-wrap mt-5'>
                <form action="" className='flex flex-wrap flex-col gap-2'
                    onSubmit={formSubmitHandler}
                >
                    <input type="text" name="" id="" className='bg-gray-300 rounded-l-full rounded-r-full w-[10rem] text-[1.3rem] p-2 outline-none'
                        value={choiceType}
                        disabled
                    />
                    
                    <div className='flex flex-wrap'>
                        <input type="text" name="" id="" placeholder='Task ?'
                            className='text-[1.3rem] font-serif w-[40rem]
                        p-2 outline-none bg-gray-300 text-black rounded-l-full
                        max-[1100px]:w-[30rem] 
                        max-[900px]:w-[20rem] max-[900px]:text-[1.1rem]
                        max-[610px]:w-[10rem] max-[610px]:text-[1rem]
                        cursor-pointer'
                            value={formContext}
                            onChange={(e) => setForm(e.target.value)}
                        />

                        <button type='submit' className='text-[1.3rem] font-serif 
                        p-3 outline-none bg-green-700 text-white rounded-r-full px-4 tracking-wider hover:bg-green-800 transition-colors duration-75'>Add</button>
                    </div>
                </form>
            </div>

        </>
    );
}

export default Form;