import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    color: #fff;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    li {
      margin: 0 5px;

      a {
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        font-weight: 400;
        &:hover {
          color: #d7e1e1;
          transition: all 0.3s linear;
        }

        span {
          color: #209e91;
          &:hover {
            color: #1c887d;
            transition: all 0.3s linear;
          }
        }
      }
    }
  }
`;
