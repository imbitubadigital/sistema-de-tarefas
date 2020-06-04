import styled from 'styled-components';

export const ContentDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const BoxDrop = styled.div`
  position: relative;
`;

export const Image = styled.div`
  width: 205px;
  height: 205px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const Drop = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 205px;
  height: 205px;
  border: 3px solid #c1c1c1;
  margin-bottom: 30px;
  border-style: dashed;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.2);
  font-size: 12px;

  &:hover {
    color: #fff;
    border-color: #fff;
  }

  i {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

export const BoxLoad = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  i {
    font-size: 50px;
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

export const TextLoad = styled.p`
  color: #fff;
  font-size: 14px;
  width: 100%;
  text-align: center;
`;
