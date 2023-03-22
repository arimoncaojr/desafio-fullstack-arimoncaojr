import styled from "styled-components";

interface IStyledProps {
  colorText?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background-color: black;
`;

export const TitlePage = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 2rem;
  max-width: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 40%;
  height: 50%;
  border-radius: 8px;
  gap: 2rem;
  max-width: 100%;

  @media (max-width: 768px) {
    height: 25%;
  }

  h2 {
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    max-width: 100%;
    width: 80%;
    height: 50%;
  }

  input {
    border: 2px solid #f1e8e8;
    border-radius: 4px;
    width: 100%;
  }

  button {
    background-color: black;
    color: white;
    border-radius: 2px;
    border: transparent;

    :hover {
      background-color: gray;
      color: black;
    }
  }
`;

export const Label = styled.label<IStyledProps>`
  font-weight: bold;
  color: ${(props) => props.colorText};
`;
