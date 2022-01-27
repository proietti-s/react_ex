import React from "react";
import "./App.css";

// -- ESEMPIO CON CLASSI

//2- creo il component con una funzione perchè è stateLess
const Todo = (props) => {
  return (
    <div
       onClick={() => props.completeTodo(props.index)}
      className="todo"
      style={{
        textDecoration: props.todo.completed ? "line-through" : "",
        backgroundColor: props.todo.completed ? "#6a67ce3e" : "",
      }}
    >
      {props.todo.name}
      <div>
        <button
          style={{ display: props.todo.completed ? "block" : "none" }}
          onClick={() => props.completeTodo(props.index)}>
          ✔
        </button>
      </div>
    </div>
  );
};

//3- creo il Form per aggiungere todo
class Form extends React.Component {
  state = {
    value: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.value.trim() === "") {
      alert("scrivi qualcosa");
      return;
    }
    this.props.submit(this.state.value);
    this.setState({ value: "" });
  };

  onChangeText = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          onChange={this.onChangeText}
          type="text"
          placeholder="Add something to do!"
          className="input"
          value={this.state.value}
        />
      </form>
    );
  }
}

// 1- creo la classe App con il render

class App extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    const newTodos = [...this.state.todos, { name: todo, completed: false }];
    this.setState({
      todos: newTodos,
    });
  };

  completaTodoHandler = (index) => {
    const newTodos = [...this.state.todos];
    if (newTodos[index].completed === false) {
      newTodos[index].completed = true;
      this.setState({
        todos: newTodos,
      });
    } else {
      newTodos[index].completed = false;
      this.setState({
        todos: newTodos,
      });
    }
  };

  render() {
    return (
      <div className="app">
        
        <div className="todo-list">
          {this.state.todos.map((item, index) => (
            <Todo
              key={index}
              todo={item}
              index={index}
              completeTodo={this.completaTodoHandler}
            />
          ))}
          <Form submit={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
