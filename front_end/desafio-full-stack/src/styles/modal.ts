import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 50%;
  min-height: 80%;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: white;
    border-radius: 2px;
    padding-bottom: 20px;
    max-width: 100%;

    @media (max-width: 768px) {
      width: 100%;
    }

    .closeModalRegister {
      border: transparent;
      background-color: transparent;
      color: black;
      font-size: 1rem;
      font-weight: bold;

      :hover {
        color: gray;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
      padding: 5px;

      h3 {
        font-size: 1.5rem;
        color: black;
        font-weight: bolder;
        margin: 0 auto;
      }

      input {
        border: 2px solid #f1e8e8;
        border-radius: 4px;
        width: 80%;
      }

      button {
        background-color: black;
        color: white;
        border-radius: 2px;
        border: 2px solid transparent;
        width: 85%;
        margin: 0 auto;

        :hover {
          background-color: gray;
          color: black;
        }
      }
    }
  }
`;
