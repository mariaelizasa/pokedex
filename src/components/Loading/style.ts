import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Pokeball = styled.div`
  width: 180px;
  height: 180px;
  background-image: url("/pokebola-icon.png"); 
  background-size: cover;
  animation: ${spin} 3s linear infinite;
`;

export const LoadingTitle = styled.div`
  margin-top: 16px;
  font-size: 24px;
  color: #000;
`;
