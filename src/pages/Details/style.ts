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

export const Card = styled.div<DetailsProps>`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 90vh;
  max-width: 600px;
  min-height: 65vh;
  border-radius: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background: ${({ color }) => colorMapping[color] || "#fff"};
  padding: 30px;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 80vw;
    height: 70vh;
  }

  @media (max-width: 480px) {
    height: 90vh;
  }
`;

export const SectionImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 50px;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 150px;
  height: auto;
  margin: 0 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  padding: 10px;
`;

export const Ball = styled.img`
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  padding: 5px;
`;

export const SectionType = styled.div<DetailsProps>`
  margin: 0px auto;
  padding: 30px;
  background: ${({ color }) => color || "#fff"};
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  @media (max-width: 480px) {
    width: 200px;
  }
`;

export const SectionStats = styled.div`
  margin: 0px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  background: ${({ color }) => colorMapping[color] || "#fff"};
  width: 320px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  color: black;

  @media (max-width: 480px) {
    width: 200px;
  }
`;

export const Button = styled.button<DetailsProps>`
  padding: 10px 30px;
  border-radius: 8cm;
  margin: 5px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  background-color: #ddd;
  border: #ddd;
`;
