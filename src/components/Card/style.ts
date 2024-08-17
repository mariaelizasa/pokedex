import styled from "styled-components";
import { colorMapping } from "../../utils/utils";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
  padding: 0 10%;
`;

export const Card = styled.div<CardProps>`
  background: ${({ color }) => colorMapping[color] || "#fff"};
  border-radius: 16px;
  text-align: center;
  width: 100%;
  height: 40vh;
  max-width: 225px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("/pokeball.png") no-repeat center;
    filter: brightness(0) invert(1);
    background-size: contain;
    opacity: 0.3;
    z-index: 0;
  }
`;

export const CardImage = styled.img`
  height: 150px;
  width: 100%;
  object-fit: contain;
  z-index: 1;
  position: relative;
`;

export const CardId = styled.p`
  font-weight: 800;
  padding-top: 20px;
  font-size: 28px;
  position: relative;
  margin: 0;
  z-index: 1;
  font-style: oblique;
`;
export const CardName = styled.p`
  font-weight: 800;
  padding-bottom: 20px;
  text-transform: capitalize;
  font-size: 20px;
  position: relative;
  margin: 0;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
