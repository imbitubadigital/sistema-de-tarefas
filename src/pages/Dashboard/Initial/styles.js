import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Info = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  flex: 1;
  color: rgba(255, 255, 255, 0.8);
  padding: 20px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 6px solid rgba(255, 255, 255, 0.3);
    width: 60px;
    height: 60px;
    border-radius: 30px;

    i {
      font-size: 25px;
    }
  }
  div {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 25px;

    h3 {
      font-size: 25px;
      font-weight: 400;
    }
    strong {
      font-size: 25px;
      font-weight: 300;
    }
  }
`;

export const Detail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
  }
`;
export const BoxInfo = styled.div`
  margin-top: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    flex-wrap: wrap;
    strong {
      min-width: 180px;
      text-align: right;
      margin-right: 10px;
      display: inline-block;
    }
    p + p {
      margin-top: 5px;
    }
  }
`;
