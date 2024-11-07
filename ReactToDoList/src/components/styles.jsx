import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: pink;
  margin: 0 auto;
  justify-content: center;
}
`;

export const Button = styled.button`
  font-size: 1rem;
  text-align: center;
  color: red;
  border: 2px solid blue;
  height: 42px;
  margin-left: 5px;
`;

export const DeleteButton = styled(Button)`
  border: 2px solid #bf4f74;
`;

export const CompleteButton = styled(Button)`
  border: 2px solid orange;
  margin-left: 30px;
`;

export const TodoTr = styled.tr`
  display: flex;
  align-items: center;
  padding: 2px 0;
`;

export const Container = styled.section`
  font-size: 1rem;
  text-align: center;
  color: blue;
  background-color: skyblue;
  padding: 30px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const ColoredMessage = styled.div`
  font-size: 20px;
  ${(props) =>
    props.$primary &&
    `
  color: green;
  font-weight: 700;
  background-color: aqua;
  text-align: left;
  `}
`;

export const Text = styled.p`
  color: red;
`;

export const Textarea = styled.textarea`
  height: 48px;
  line-height: 48px;
  background-color: transparent;
  border: none;
  resize: none;
  vertical-align: middle;
  width: 500px;
`;
