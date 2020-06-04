import styled from 'styled-components';

export const St = styled.div`
  min-width: 150px;
  padding: 6px 10px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  span {
    font-size: 14px;
    margin-left: 5px;
  }
`;

export const BoxReset = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    width: 10px;
  }
`;

export const BoxLinkOrder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Credit = styled.div`
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  border-radius: 5px 0 0 5px;
  background: #83af9b;
`;

export const Used = styled.div`
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  border-radius: 0 5px 5px 0;
  background: #c7f464;
`;
