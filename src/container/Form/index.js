import React from "react";
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ED6975;
  margin: 0 5px;
  outline:none;
  :focus{
    border: 3px solid #ED6975;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background:#ED6975;
  border-radius: 5px;
  text-transform: uppercase;
  outline: none;
  color:#fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  :active{
    background:#F8E5E9;
    color: #ED6975;
  }
`


function index(props) {
  return (
      <form 

      style={{
        position: 'relative',
        textAlign: 'center',
        margin: '1em 0'
      }}
      
      
      onSubmit={props.handleSubmit} >
        <Input  
          name="username"
          id="username"
          value={props.query}
          placeholder="Enter Github Username"
          onChange={props.handleChange} />
        <Button>Submit</Button>
      </form>
  );
}

export default index;
