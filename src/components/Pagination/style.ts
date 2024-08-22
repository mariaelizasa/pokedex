import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 10%;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  margin: 20px;
  border-color: blue;
  @media (max-width: 768px) {
    width: 60vw;
   
  }
`;
