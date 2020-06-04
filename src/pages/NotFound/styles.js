import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  width: 100%;
  height: 100vh;
  padding: 20px;
  img{
    width: 100%;
    max-width: 600px;
  }

  p{
    text-transform:uppercase;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    line-height: 30px;
    color: #470655;

  }

  a {
    text-decoration: none;
    color: #470655;
    border: 1px solid #470655;
    padding: 10px 30px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: 30px;
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      color: #fff;
      background: #470655;
      transition: all 0.3s linear;
    }

    i {
      color: #470655;
      font-size: 22px;
      margin-right: 10px;
    }

`;
