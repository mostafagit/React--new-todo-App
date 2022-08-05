import React, { Component } from "react";

class TodoInput extends Component {
  state = {};

  render() {
    const { handleChange, item, handleSubmit, editItem } = this.props;

    return (
      <div className="card card-body my-3" >
        <form onSubmit={handleSubmit}>
          <div className="input-group">
              <div className="input-group-text bg-primary text-white ">
                <i className="fas fa-book"></i>
              </div>
           <input  value={item} onChange={handleChange} type="text" className="form-control text-capitalize text-end" placeholder="اینجا بنویس" />
          </div>
          <div className="d-grid">
          <button disabled={item ? false : true} type="submit" className={editItem ? "btn btn-success mt-3 " :"btn btn-primary mt-3 "} >{editItem ? "تغییر دهید" : "ی مورد اضافه کن"}</button>

          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
