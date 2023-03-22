import styled from "styled-components";
import { Link } from "react-router-dom";

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
  height: 60%;
  border-radius: 2px;
  gap: 1rem;
  max-width: 100%;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 50%;
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
    border: 2px solid transparent;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      width: 80%;
    }

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

export const Span = styled.span`
  color: grey;
  font-size: 1rem;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  gap: 2rem;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 45%;
  background-color: white;
  border-radius: 2px;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 54%;

  @media (max-width: 768px) {
    width: 60%;
    max-height: 30%;
  }

  h2 {
    font-weight: bolder;
  }
`;

export const ContactsList = styled.ul`
  justify-content: center;
  list-style-type: none;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  gap: 1rem;
`;

export const LinkStyle = styled(Link)`
  background-color: black;
  color: white;
  border-radius: 2px;
  border: 2px solid transparent;
  text-decoration: none;
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }

  :hover {
    background-color: gray;
    color: black;
  }
`;
