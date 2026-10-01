import { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import Hero from "./Hero";

function Container() {

    const [todo, setTodo] = useState([])

    return (
        <>
            <Hero todo={todo}/>
            <div className="container">
                <Form setTodo={setTodo} />
                <TodoItem todo={todo} setTodo={setTodo} />
            </div>
            <div className="container-empty"></div>
        </>
    )
}
export default Container