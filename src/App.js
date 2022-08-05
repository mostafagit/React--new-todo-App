import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";




function App() {
  const [items,setItems] = useState([])
  const [item,setItem] = useState("")
  const [edit,setEdit] = useState(false)
  const [id,setId] = useState(uuidv4())

  const handleChange = (e) =>{
    setItem(e.target.value)
  }

  const handleSubmit = (e) =>{
  e.preventDefault()
  const createItem = {
    id: id,
    title:item
  }
  setItems([...items,createItem])
  setItem("")
  setId(uuidv4())
  setEdit(false)
  }

  const handleEdit = (id) =>{
  const filtredItems = items.filter(item=>item.id !== id)
  const selectedItem = items.find(item => item.id === id)
  setItems(filtredItems)
  setItem(selectedItem.title)
  setId(id)
  setEdit(true)
  }


  const clearList = () =>{
    setItems([])
  }

  const handleDelete = (id) =>{
    const filtredItem = items.filter(item=>item.id !== id)
    setItems(filtredItem)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-capitalize text-center">todo app</h3>
          <TodoInput item={item} handleChange={handleChange} handleSubmit={handleSubmit} editItem={edit} />
          <TodoList items={items} clearList={clearList} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
