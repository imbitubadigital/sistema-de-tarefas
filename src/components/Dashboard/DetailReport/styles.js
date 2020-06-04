import styled from 'styled-components';

export const BoxDetail = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  /*  img {
    width: 100%;
  } */

  p {
    color: #333;
    font-size: 14px;
    margin-top: 5px;
    padding: 15px 0;
  }
`;

export const BoxSub = styled.h3`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  color: #666;
  font-size: 18px;

  img {
    border-radius: 50%;
    flex-basis: 150px;
    margin-right: 20px;
  }
  div {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    p {
      font-size: 15px;
      color: #666;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0;
      padding: 4px 0;
      font-weight: 300;
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 26px;
        height: 26px;
        border-radius: 13px;
        margin-right: 6px;
      }
      b {
        margin-right: 5px;
      }
    }
  }
`;

export const BoxSubImobi = styled.h3`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  color: #666;
  font-size: 18px;

  img {
    flex-basis: 150px;
    margin-right: 20px;
  }
  div {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    p {
      font-size: 15px;
      color: #666;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0;
      padding: 4px 0;
      font-weight: 300;
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 26px;
        height: 26px;
        border-radius: 13px;
        margin-right: 6px;
      }
      b {
        margin-right: 5px;
      }
    }
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-top: 1px solid #ccc;
  padding: 15px 0;

  h4 {
    color: #333;
    font-size: 16px;
    margin-bottom: 10px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    p {
      flex-basis: 32%;
      font-size: 15px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #666;
      margin: 0;
      padding: 4px 0;
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 26px;
        height: 26px;
        border-radius: 13px;
        margin-right: 6px;
      }
    }
  }
`;

export const Icon = styled.i`
  background: ${props => props.bg};
`;

export const Details = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    p {
      font-size: 15px;
      color: #666;
      flex-basis: 47%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0;
      padding: 4px 0;

      i {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 26px;
        height: 26px;
        border-radius: 13px;
        margin-right: 6px;
      }
      b {
        margin-right: 5px;
      }
    }
  }
`;

export const NotBloq = styled.p`
  font-size: 12px;
  width: 100%;
  text-align: center;
  margin: 0;
`;

export const BoxBloq = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 5px;
`;
export const BoxBloqLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-basis: 38%;
  p {
    font-size: 10px;
    color: #666;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 4px 0;
    i {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      width: 26px;
      height: 26px;
      border-radius: 13px;
      margin-right: 6px;
    }
    b {
      margin-right: 5px;
    }
  }
`;
export const BoxBloqRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-basis: 60%;
  p {
    font-size: 12px;
    color: #666;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 4px 0;
    i {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      width: 26px;
      height: 26px;
      border-radius: 13px;
      margin-right: 6px;
    }
    b {
      margin-right: 5px;
    }
  }
`;
