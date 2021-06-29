import React from 'react';





TodoList.defaultProps = {
    todo: [],
    onTodoClick: null,
}


function TodoList({ todos, handleTodoClick }) {
    return (
        <>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id} onClick={() => handleTodoClick(todo.id)}>{todo.title}</li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;