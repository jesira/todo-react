import React,{Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';

class App extends Component{

  state = {
    todos: [
      {
        id:uuid.v4(),
        name: "Taask 1",
        is_completed : false
      },
      {
        id:uuid.v4(),
        name: "Taask 2",
        is_completed : false
      },
      {
        id:uuid.v4(),
        name: "Taask 3",
        is_completed : false
      },
      {
        id:uuid.v4(),
        name: "Taask 4",
        is_completed : false
      }
    ]
  }

  //toggle complete
markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.is_completed= !todo.is_completed
      }
      return todo;
    })});
}

//delete totos


//add todo
addTodo = (name) => {
  const newTodo = {
    id: uuid.v4(),
    name: name,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]});
}

// delTodo(id,event) {
//   var updatedItems = this.state.todos.filter(todo => {
//     return todo.id !== id;
//   });

 
//   this.setState({
//     todos: [].concat(updatedItems)
//   });
// }

delTodo = (id) => {
  
  console.log(id)
  this.setState({todos: [...this.state.todos.filter(
    todo => todo.id !== id)]});
}


  render(){
    //console.log(this.state.todos)
    return (
    <div className="App">
      <div className="container">
      <Header/>
      <AddTodo addTodo = {this.addTodo}/>
     <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
    </div>
    </div>
  );
}
}

export default App;
