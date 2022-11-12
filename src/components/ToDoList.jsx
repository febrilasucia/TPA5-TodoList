import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/action/todoAction";
import Judul from "./Judul";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

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
    <>
      <Judul />
      <div className="form-todolist">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="inputTodo"
            value={inputTodo}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
      </div>
      <div className="list">
        <div className="card">
          <ul class="list-group list-group-flush">
            {data.map((item, index) => (
              <li className="list-group-item" key={index}>
                <div class="container">
                  <div class="row justify-content-start">
                    <div class="row justify-content-between">
                      <div class="col-lg-8">
                        <div className="items">{item}</div>
                      </div>
                      <div class="col-lg-4">
                        <div className="btn">
                          <div className="button-delete">
                            <button type="button" class="btn btn-primary">
                              <FaTrashAlt />
                            </button>
                          </div>
                          <div className="button-edit">
                            <button type="button" class="btn btn-primary">
                              <FaPen />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
