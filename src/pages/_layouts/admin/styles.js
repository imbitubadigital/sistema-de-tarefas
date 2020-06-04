import styled from 'styled-components';
import bg from '~/assets/blur-bg.jpg';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const Content = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  margin-left: ${props => (props.show ? '184px' : '50px')};
  min-height: 100vh;
  padding: 90px 30px 0 30px;
`;

export const ContentPage = styled.div`
  flex: 1;
  flex-direction: column;
`;
export const FakeFooter = styled.div`
  height: 50px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;

  p {
    font-size: 12px;
    span {
      margin-left: 6px;
      color: #209e91;
    }
  }
`;
