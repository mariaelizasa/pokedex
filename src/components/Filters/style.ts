import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 40px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 30vw;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 70vw;
    margin-right: 0px;
  }
  &:focus {
    border-color: blue;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 40px;
`;

export const Select = styled.select`
  padding: 10px;
  width: 10vw;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
  background-color: white;
  appearance: none;

  @media (max-width: 768px) {
    width: 30vw;
    margin-right: 0px;
  }

  &:focus {
    border-color: blue;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;
export const Label = styled.label`
  @media (max-width: 768px) {
    margin: 10px 0;
  }

  &:focus {
    border-color: blue;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;
