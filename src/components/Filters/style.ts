import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 40px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 30%;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
  margin-right: 20px;

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
  width: 10%;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
  background-color: white;
  appearance: none; /* Remove default styling in some browsers */

  &:focus {
    border-color: blue;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;