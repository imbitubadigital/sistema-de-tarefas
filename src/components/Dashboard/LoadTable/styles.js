import styled from 'styled-components';

export const BoxLoad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  z-index: 10;
  i {
    font-size: 40px;
    color: #fff;
    margin-bottom: 15px;
    animation: loading 1s cubic-bezier(0.25, 0.25, 0.25, 0.25) infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
