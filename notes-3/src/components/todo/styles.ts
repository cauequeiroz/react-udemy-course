import styled from "styled-components";

type Props = {
  completed: boolean
};

export const Wrapper = styled.li<Props>`
  border: 1px solid #7f8c8d;
  color: ${({completed}) => completed ? '#ecf0f1' : '#2c3e50'};
  background: ${({completed}) => completed ? '#7f8c8d' : 'inherit'};
  border-radius: 3px;
  padding: 10px;
  margin: 10px 0;
  text-decoration: ${({completed}) => completed ? 'line-through' : 'none'};

  &:hover {
    background: #7f8c8d;
    color: #ecf0f1;
    cursor: pointer;
    transition: .1s all ease;
  }
`;