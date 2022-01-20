import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        {inputText!="" &&
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id:Math.random()*1000}
        ])
        }
        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form className="main-form">
            <div>
                <input 
                    value={inputText}
                    type="text" 
                    className="todo-input"
                    onChange={inputTextHandler}
                    placeholder="Add new task"
                />
                <button 
                    className="todo-button" 
                    type="submit"
                    onClick={submitTodoHandler}
                >
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;