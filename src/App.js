import React, { useState } from 'react';
import { v4 } from 'uuid';
import TodoForm from './components/todolist/todoform';
import TodoList from './components/todolist/todolist';
function App() {



	/**  todo  */
	const [todoList, setTodoList] = useState([]);
	const removeTodo = (e) => {
		const arrTodoList = [...todoList];
		arrTodoList.splice(e, 1);
		setTodoList(arrTodoList);
	}


	const handleTodoClick = (e) => {
		console.log('app e ', e);
	}

	const onCheckClick = (e) => {
		removeTodo(e);
	}
	const handleTodoFormSubmit = (formValue) => {
		console.log('sub ', formValue);
			setTodoList([formValue, ...todoList]);
	}



	/**  useEffect */


	return (
		<>
			<h3>Wellcome</h3>
			<TodoForm onSubmit={handleTodoFormSubmit}/>
			<TodoList todos={todoList} handleTodoClick={handleTodoClick} />
		</>

	);
}

export default App;
