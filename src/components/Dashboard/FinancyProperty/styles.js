import styled from 'styled-components';

export const BoxFinancy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Icon = styled.i`
  background: ${props => props.bg};
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  img {
    margin-right: 20px;
  }
  div {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    p {
      font-size: 12px;
      color: #fff;
      flex-basis: 48%;
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
