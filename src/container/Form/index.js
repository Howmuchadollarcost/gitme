import React from "react";
import styled from "styled-components";

import { DataConsumer } from "../../DataContext";

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ed6975;
  margin: 0 5px;
  outline: none;
  transition: border 2s ease-out;
  :focus {
    border: 1px solid #3b7470;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background: #ed6975;
  border-radius: 5px;
  text-transform: uppercase;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  :active {
    background: #f8e5e9;
    color: #ed6975;
  }
`;

const style = {
  position: "relative",
  textAlign: "center",
  margin: "1em 0"
};

function Form(props) {
  return (
    <DataConsumer>
      {({ query, handleSubmit, handleChange }) => (
        <form style={style} onSubmit={handleSubmit}>
          <Input
            name="username"
            id="username"
            value={query}
            placeholder="Enter Github Username"
            autoComplete="off"
            onChange={handleChange}
          />
          <Button>Submit</Button>
        </form>
      )}
    </DataConsumer>
  );
}

export default Form;
