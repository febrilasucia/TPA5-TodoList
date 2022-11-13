import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action/todoAction";
import Judul from "./Judul";
import Button from "./Button";

function ToDoList() {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState(" ");
  const { data } = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputTodo, "dari event");
    dispatch(addTodo(inputTodo));
  };

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  return (
    <div>
      <Judul />
      <div className="form-todolist">
        <form onSubmit={handleSubmit} className="row g-2">
          <div className="col-auto" style={{ width: 475 }}>
            <input
              type="text"
              className="form-control"
              name="inputTodo"
              value={inputTodo}
              onChange={handleChange}
              placeholder="type here.."
            />
          </div>
          <div className="col-auto" style={{ width: 100 }}>
            <button className="form-control">Add</button>
          </div>
        </form>
      </div>
      <div className="list">
        <div className="card">
          <div className="list-group list-group-flush">
            {data.map((item, index) => (
              <div className="list-group-item" key={index}>
                <div className="items">
                  <Button key={index} item={item} idx={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
