import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledAll = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #252934;

  @media (max-width: 500px) {
    padding: 5rem 1rem;
  }

  p {
    color: #04c2c9;
    font-family: "Quicksand", sans-serif;
    font-weight: bold;

    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
`;

export const StyledDiv = styled.div`
  line-height: 0.5rem;
  align-self: center;

  h2 {
    font-size: 2.5rem;
    font-family: "Changa", sans-serif;
    color: #ffffff;
  }

  div {
    width: 5rem;
    height: 0.2rem;
    margin-left: 2.5rem;
    background: #ffffff;

    @media (max-width: 800px) {
      margin-left: 3.5rem;
    }
  }
`;

export const StyleForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
  color: white;

  @media (max-width: 500px) {
    width: 20rem;
  }
`;

export const StyleField = styled(Field)`
  padding: 0.7rem;
  background: #1e242c;
  border: 1px solid #1b242f;
  color: #fff;
  margin: 0.3rem 0;
`;

export const StyledButton = styled.button`
  width: 23%;
  padding: 1rem;
  color: white;
  border: 2px solid white;
  font-size: 1.1rem;
  background: #252934;
  margin-top: 0.3rem;
  align-self: flex-end;

  &:hover {
    background: #04c2c9;
    transition: step-end;
  }

  @media (max-width: 500px) {
    width: 30%;
  }
`;
