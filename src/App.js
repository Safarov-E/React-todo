import React from 'react';  
import './App.css';
import './index'; 
import Header from './components/Header';
import Todo from './components/Todo';
 
function App(props) {
	return	(
	  <main>
	  	<Header title={props.title}/>
	  	<section className="todo-list">
	  		<Todo title={"Изучить JavaScript"} completed={true}/>
	  		<Todo title={"Изучить React"} completed={false}/>
	  	</section>
	  </main>
	);
}


export default App