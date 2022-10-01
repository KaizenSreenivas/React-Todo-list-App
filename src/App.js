
import './App.css';
import { useState } from 'react';
import FormTodo from './components/form-todo';
import FormTodoList from './components/form-todo-list';
import FormDeleteList from './components/form-delete-list';
function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, seteditTodo] = useState(0);
  const [completedItems, setcompletedItems] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTodo) {
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      seteditTodo(0);
      setTodo("");
      return
    }

    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
    }
    setTodo('');
  }
  const handleEdit = (id) => {
    const editTodo = todos.find((item) => item.id === id);
    setTodo(editTodo.todo);
    seteditTodo(editTodo);

  }
  const handleDelete = (id) => {
    const deleteTodo = todos.filter((del) => del.id !== id);
    const doneItem = todos.filter((del) => del.id === id);
    console.log(doneItem);
    setcompletedItems([...doneItem, ...completedItems]);
    setTodos([...deleteTodo]);

  }
  return (
    <>
      <div className='App'>
        <div className='container'>
          <FormTodo handleSubmit={handleSubmit} setTodo={setTodo} todo={todo} editTodo={editTodo} onChange={onchange} />
          <FormTodoList handleEdit={handleEdit} handleDelete={handleDelete} todos={todos} />
          <div className='container'>
            <FormDeleteList completedItems={completedItems} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
