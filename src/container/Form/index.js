import React from "react";

function index(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit} >
        <input
          type="text"
          name="name"
          id="name"
          value={props.query}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}

export default index;
