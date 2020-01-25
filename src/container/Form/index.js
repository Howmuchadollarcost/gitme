import React from "react";

function index(props) {
    console.log(props)
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          id="name"
          value={props.query}
          onChange={e => this.setState({ query: e.target.value })}
        />
      </form>
    </div>
  );
}

export default index;
