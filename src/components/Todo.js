import React, { useState } from "react";

const Todo = ({text, todo, todos, setTodos }) => {
    
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id))
    };

    const inputTextHandler = (e) => {
        setEdit({
            value: e.target.value,
            id: todo.id
        })
    };

    const submitUpdate = () => {
        updateTodo(edit.id, edit.value);
        setEdit({
            id: null,
            value: ''
        })
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue || "" || /^\s*$/.test(newValue)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? ({id: item.id, completed:item.completed, text: newValue}) : ({id: item.id, completed: item.completed, text: item.text}))));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <>
        {edit.id  ?
            (<form className="form-edit">
                <input 
                    value={edit.value}
                    type="text" 
                    className="todo-edit"
                    onChange={inputTextHandler}
                />
                <button 
                    className="complete-btn-edit" 
                    type="submit"
                    onClick={submitUpdate}
                >
                    <i className="fas fa-check"></i>
                </button>
            </form>):
            (<div className={`todo ${todo.completed ? "completed" : ''}`}>
                <li className='todo-item'>{text}</li>
                <div style={{display:"flex"}}>
                    {todo.completed ?
                    (<button 
                        onClick={completeHandler}
                        className={`completed-btn ${todo.completed ? "btn-completed" : ''}`}
                    >
                        <i className="fas fa-times"></i>
                    </button>):
                    (<button 
                        onClick={completeHandler}
                        className="complete-btn"
                    >
                        <i className="fas fa-check"></i>
                    </button>)
                    }
                    <button 
                        onClick={() => setEdit({id: todo.id, value: todo.text})} 
                        className={`edit-btn ${todo.completed ? "btn-completed" : ''}`}
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <button 
                        onClick={deleteHandler} 
                        className={`trash-btn ${todo.completed ? "btn-completed" : ''}`}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>)
        }
        </>
    );
};

export default Todo;