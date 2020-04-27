import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  svg {
    animation: ${rotate} 2s linear infinite;
    align-items: center;
    margin-right: -30px;

    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
