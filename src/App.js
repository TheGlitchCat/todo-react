import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddItem from './components/AddItem';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the thrash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with my cat',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with The Boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
    console.log("Item id is = " + id)
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos:[...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  // Adding new Item

  addItem = (title) => {
    const newItem = {
      id: 4,
      title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newItem]
    });

  }

  render(){
    return (
      //console.log(this.state.todos),
      <div className="App">
        
        <div className="container">
          <Header />

          <Todos todos = {this.state.todos} 
                markComplete = {this.markComplete}
                delTodo = {this.delTodo}/>

          <AddItem addItem = {this.addItem} />
        </div>

        
      </div>
    );  
  }
  
}

export default App;
