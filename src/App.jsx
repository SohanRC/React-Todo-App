import { useEffect, useState} from 'react'
import './App.css'
import { Choice, Form, TodoContainer } from './components'
import useTodo, { TodoProvider } from './context/TodoContext'
import { ChoiceProvider } from './context/ChoiceContext'
import { FormContextProvider } from './context/FormContext'
import randomId from 'random-id'

function App() {

  const [todos, setTodos] = useState([]);
  const [choiceType, setChoiceType] = useState("PERSONAL");
  const [formContext, setFormContext] = useState("");
  const [editId, setId] = useState("0"); // local state to check if something at the moment is being edited or not


  const addTodo = (todoText) => {    
    if (editId === "0") {
      // Create a new Todo object
      const newId = randomId(10, 'aA0');
      let newTodo = {
        id: newId,
        todoText,
        completed: false,
        type: choiceType.toUpperCase(),
      }

      // add this to list
      setTodos((prevList) => [...prevList, newTodo]);
    }
    else {
      setTodos((prevList) => prevList.map((todo) => todo.id === editId ? { ...todo, todoText } : todo))
      setId(0);
    }

  }

  const editTodo = (id, todoText) => {
    setForm(todoText)
    setId(id)
  }

  const deleteTodo = (id) => {
    setTodos((prevList) => prevList.filter((todo) => todo.id !== id));
  }

  const setCompleted = (id) => {
    setTodos((prevList) => prevList.map((todo) => (todo.id === id) ? { ...todo, completed: !todo.completed } : todo))
  }

  const setChoice = (choice) => {
    if (choice !== choiceType) setChoiceType(choice);
  }

  const setForm = (value) => {
    setFormContext(value);
  }



  return (
    <div className='min-h-[100vh] w-full bg-slate-800 flex justify-center items-center scroll-smooth'>
      <TodoProvider value={{ todos, addTodo, editTodo, deleteTodo, setCompleted }}>
        <ChoiceProvider value={{ choiceType, setChoice }}>
          <FormContextProvider value={{ formContext, setForm }}>
            <div className='w-[70vw] min-h-[80vh] rounded-md overflow-hidden transition-shadow duration-100 bg-gray-700 my-10'>

              <div className='text-4xl p-3 text-center  text-white  tracking-wider'>
                <h1>TODO APP</h1>
              </div>

              <Choice />

              <Form />

              <TodoContainer />

            </div>
          </FormContextProvider>
        </ChoiceProvider>
      </TodoProvider>
    </div>
  )
}

export default App
