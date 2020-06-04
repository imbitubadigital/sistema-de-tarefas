import styled from 'styled-components';
import bg from '~/assets/blur-bg.jpg';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const ContentPage = styled.div`
  flex: 1;
  flex-direction: column;
`;
