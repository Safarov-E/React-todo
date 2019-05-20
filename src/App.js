import React from 'react';  
import './App.css';
import './index';  
import Header from './components/Header';
import Todo from './components/Todo';
import PropTypes from 'prop-types'
 
function App(props) {
	return	(
	  <main>
	  	<Header title={props.title}/>
	  	<section className="todo-list">
	  		{props.todos.map(todo =>
	  			<Todo key={todo.id} title={todo.title} completed={todo.completed} />)
	  		}
	  	</section>
	  </main>
	);
}

App.propTypes = {
	title: PropTypes.string,
	todos: PropTypes.arrayOf(PropTypes.shape ({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}))
};

App.defaultProps = {
	title: 'React Todo'
}


export default App