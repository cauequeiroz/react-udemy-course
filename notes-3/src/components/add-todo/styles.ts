import styled from "styled-components";

export const Form = styled.form`
  background: #ecf0f1;
  width: 400px;
  border-radius: 3px;
  padding: 0 10px;
  margin: 25px auto;
  overflow: hidden;
  border: 1px solid #7f8c8d;
`;

export const Label = styled.label`
  display: block;
  margin: 10px 0;
  color: #2c3e50;
`;

export const Input = styled.input`
  border-radius: 3px;
  padding: 5px;
  margin: 0 10px 10px 0;
  border: 1px solid #7f8c8d;
`;

export const Button = styled.button`
  border-radius: 3px;
  border: 1px solid #7f8c8d;
  height: 33px;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
    background: #7f8c8d;
    color: #ecf0f1;
    transition: 0.1s all ease;
  }
`;
