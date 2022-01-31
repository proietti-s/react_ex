import React from "react";
import "./App.css";

// -- ESEMPIO CON CLASSI

//2- creo il component con una funzione perchè è stateLess
const Todo = (props) => {
  return (
    <div
      style={{ backgroundColor: props.todo.completed ? "#6a67ce3e" : "" }}
      className="todo"
      onClick={() => props.completeTodo(props.index)}
    >
      <p
        style={{
          textDecoration: props.todo.completed ? "line-through" : "",
        }}
      >
        {" "}
        {props.todo.name}{" "}
      </p>
      <div>
        <button
          style={{
            color: "#fc636b",
            display: props.todo.completed ? "block" : "none",
            textDecoration: props.todo.completed ? "none" : "",
          }}
          onClick={() => props.completeTodo(props.index)}
        >
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
        <button style={{padding: '1rem', fontSize:'2rem', outline: 'none'}}  onClick={this.submitHandler}>
        📖
        </button>
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
        <div>
          <nav style={{background: 'blue', padding: '0.5rem'}}><h1>React - to do list</h1></nav>
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
        </div>
    );
  }
}

export default App;
