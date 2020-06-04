import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.6);
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  i {
    color: #fff;
    font-size: 25px;
  }
`;

export const Logo = styled.div`
  width: 184px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoxRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
  p {
    font-size: 14px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6);
    span {
      color: #fff;
      font-size: 16px;
      margin-left: 10px;
    }
  }
  img {
    width: 44px;
    height: 44px;
    border-radius: 22px;
    padding: 4px;
    background: #fff;
    margin-left: 30px;
  }
`;
