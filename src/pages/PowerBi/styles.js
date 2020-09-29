import styled from 'styled-components';

export const Container = styled.div`
  
    background: #EAEAEA;
    color: #6E6E6E;
    font: Lighter 40px Segoe UI;    
    height: calc(0.5625 * 65vw); /* 16:9 aspect ratio */
    min-width: 800px;
    text-align: center;
    margin: 20px auto;
    width: 100%;
    @media (max-width: 768px) {
    min-width: 100px;
  }



`;

