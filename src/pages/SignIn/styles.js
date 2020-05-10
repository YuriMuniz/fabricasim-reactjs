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
  #spinner {
    position: absolute;
    animation: ${rotate} 2s linear infinite;
    margin-top: -10px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Images = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  @media (max-width: 330px) {
    margin-top: 50px;
  }
`;
