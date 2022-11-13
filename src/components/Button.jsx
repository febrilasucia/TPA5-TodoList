import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/action/todoAction";

function Button({ item, idx, deleteTodo }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>{item}</div>
      <div className="button-delete">
        <button
          onClick={() => deleteTodo(idx)}
          type="button"
          className="btn btn-primary"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
});
export default connect(null, mapDispatchToProps)(Button);
