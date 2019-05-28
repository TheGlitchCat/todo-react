import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddItem from './components/AddItem';
import About from './components/pages/About';
//import uuid from 'uuid';
import Axios from 'axios';

class App extends Component{
  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data}))
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
/*  delTodo = (id) => {
    this.setState({ todos:[...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
*/
  delTodo = (id) => {
    Axios.delete('https://jsonplaceholder.typicode.com/todos/${id}').then(res => 
      this.setState({ todos:[...this.state.todos.filter(todo => todo.id !== id)]})
    );
    
  }
  // Adding new Item
/*
  addItem = (title) => {
    const newItem = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newItem]
    });

  }
*/
addItem = (title) => {
  Axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false,

  }).then(res => this.setState({
        todos: [...this.state.todos, res.data]
      })
    );
  

}
  render(){
    return (
      <Router>
        
        <div className="App">
          
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Todos todos = {this.state.todos} 
                  markComplete = {this.markComplete}
                  delTodo = {this.delTodo}/>

                <AddItem addItem = {this.addItem} />
              </React.Fragment>
            )}/>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );  
  }
  
}

export default App;
