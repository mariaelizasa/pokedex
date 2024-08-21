import styled, { keyframes } from "styled-components";
import { colorMapping } from "../../utils/utils";

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${fadeInScale} 0.6s ease-out;
`;

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 60vh;
  max-width: 600px;
  min-height: 70vh;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: ${({ color }) => colorMapping[color] || "#fff"};
  padding: 20px;
  text-align: center;

  position: relative;
  @media (max-width: 768px) {
    width: 90vw;
    height: 60vh;
  }
`;

export const SectionImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 50px;
  padding: 20px;
  z-index: 1;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 150px;
  height: auto;
  border-radius: 8px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  z-index: 1;
`;

export const Ball = styled.img`
  border: 4px solid black;
  border-radius: 50%;
  z-index: 1;
`;

export const SectionType = styled.div<CardProps>`
  margin: 10px auto;
  padding: 10px;
  background: ${({ color }) => color || "#fff"};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  z-index: 1;
`;

export const SectionStats = styled.div`
  margin: 10px auto;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  background: ${({ color }) => colorMapping[color] || "#fff"};
  width: 300px;
  text-align: center;
  z-index: 1;
`;
