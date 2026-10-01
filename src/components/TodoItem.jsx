

function TodoItem({ todo, setTodo }) {


    function handleDone(id) {

        setTodo(currentTodo => {
            return (
                currentTodo.map(item => {
                    if(item.id === id) {
                        if(item.completed) {
                            return {...item, completed: false}
                        } else {
                            return {...item, completed: true}
                        }
                    } else {
                        return item
                    }
                })
            )
        })


    }


    function handleRemove(id) {

        setTodo(todo.filter(item => item.id != id))

    }


    return (
        <ul className="todo-list">
            {todo.map((item) => {
                return (
                    item.completed ? (

                        <li key={item.id} className="todo-item completed">
                        <span>{item.title}</span>
                        <div>
                            <button onClick={() => handleDone(item.id)}>Done</button>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                        </li>

                    ) : (
                        <li key={item.id} className="todo-item">
                        <span>{item.title}</span>
                        <div>
                            <button onClick={() => handleDone(item.id)}>Done</button>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </li>
                    )
                    
                
                ) 
            })}
        </ul>
    )
}

export default TodoItem