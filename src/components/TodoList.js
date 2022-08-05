import React, { Component } from 'react'
import TodoItems from './TodoItems';

class TodoList extends Component {
    state = {  }
    render() {

        const {items,clearList,handleDelete,handleEdit} = this.props

        return (
            <ul className='list-group my-5' dir='rtl'>
                <h3 className='text-capitalize text-center'>لیست کارها</h3>
          {items.map(item=>(
            <TodoItems
            key={item.id}
            title={item.title}
            handleEdit={()=>handleEdit(item.id)}
            handleDelete={()=>handleDelete(item.id)}
            />
          ))}
          <div className='d-grid'>
          <button type='button' className='btn btn-danger text-text-uppercase mt-5' onClick={clearList}>پاک کردن همه</button>
          </div>
            </ul>
        );
    }
}

export default TodoList;