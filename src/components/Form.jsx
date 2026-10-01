import { useState } from "react"

function Form({ setTodo }) {

    const [inputValue, setInputValue] = useState("")

    function handleChange(e){
        setInputValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTodo(todo => [...todo, {id: crypto.randomUUID(), title: inputValue, completed: false}])

        setInputValue("")
    }

    return (
        <div className="form-container">
            <form className="todo-form" onSubmit={handleSubmit}>
               
                    <label htmlFor="todo">Add new todo</label>
                    <div>
                        <input className="input-field" id="todo" name="todo" type="text" placeholder="Add your todo here ..." value={inputValue} onChange={handleChange} />
                        <button>Submit</button>
                    </div>
            </form>
        </div>
    )
}

export default Form