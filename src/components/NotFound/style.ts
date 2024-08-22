import styled, { keyframes } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; 
  text-align: center;
  flex-direction: column;
`;

export const Image = styled.img`
  background-image: url("/.psyduck.png");
  width: 200px;
  height: 250px;
  @media (max-width: 768px) {
    width: 150px;
    height: 200px;
  }
`;

export const TextNotFound = styled.div`
  margin-top: 20px;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
