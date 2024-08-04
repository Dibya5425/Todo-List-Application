import React, { useState, useEffect } from 'react';
import data from './data.json';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState({ text: '', description: '' });
  const [editing, setEditing] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo.text,
      description: newTodo.description,
      completed: false,
      updatedAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo({ text: '', description: '' });
  };

  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditing(todo);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editing.id) {
        return { ...todo, text: editing.text, description: editing.description, updatedAt: new Date().toISOString() };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditing(null);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={handleSearch}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo.text}
          onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
          placeholder="Title"
        />
        <input
          type="text"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
          placeholder="Description"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            {editing && editing.id === todo.id ? (
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  value={editing.text}
                  onChange={(e) => setEditing({ ...editing, text: e.target.value })}
                />
                <input
                  type="text"
                  value={editing.description}
                  onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                />
                <button type="submit">Update</button>
              </form>
            ) : (
              <div>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
                {expandedTaskId === todo.id && (
                  <div>
                    <p>{todo.description}</p>
                    <p>Last updated at: {new Date(todo.updatedAt).toLocaleString()}</p>
                  </div>
                )}
              </div>
            )}
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => setExpandedTaskId(expandedTaskId === todo.id ? null : todo.id)}>
              {expandedTaskId === todo.id ? 'Collapse' : 'Expand'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
