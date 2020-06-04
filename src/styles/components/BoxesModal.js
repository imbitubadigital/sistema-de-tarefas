import styled from 'styled-components';
import bg from '~/assets/blur-bg.jpg';

export const BoxModal = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #294752;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  }

  header {
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 25px;

    h2 {
      font-size: 15px;
      text-transform: uppercase;
      font-size: 300;
      color: #dee8e8;
      display: flex;
      flex-direction: column;
      span {
        font-size: 12px;
        font-weight: 300;
        margin-top: 5px;
        text-transform: normal;
      }
    }
  }
`;

export const Closed = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.2);

  i {
    color: #fff;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transition: 0.3s all;
  }
`;

export const ContentBoxModal = styled.article`
  padding: 20px 25px;
`;

export const BoxModalflow = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #294752;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  width: 100%;

  border-radius: 4px;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  }

  header {
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    padding: 12px 25px;

    h2 {
      font-size: 15px;
      text-transform: uppercase;
      font-size: 300;
      color: #dee8e8;
      display: flex;
      flex-direction: column;
      span {
        font-size: 12px;
        font-weight: 300;
        margin-top: 5px;
        text-transform: normal;
      }
    }
  }
`;

export const BoxModalDark = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #202225;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  overflow-y: auto;
  color: #fff;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  }

  header {
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 25px;

    h2 {
      font-size: 15px;
      text-transform: uppercase;
      font-size: 300;
      color: #dee8e8;
      display: flex;
      flex-direction: column;
      span {
        font-size: 12px;
        font-weight: 300;
        margin-top: 5px;
        text-transform: normal;
      }
    }
  }
`;

export const BoxCenter = styled.div`
  padding: 15px;
  h3 {
    text-align: center;
    margin-bottom: 15px;
  }

  h4 {
    text-align: center;
    margin: 25px 0 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 10px;
    font-size: 16px;
  }
`;
export const BoxDataUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-right: 15px;
  }
`;
export const DataUser = styled.div``;
export const Line = styled.p`
  display: flex;
  font-size: 12px;
  font-weight: 300;
  margin: 4px 0;
  align-items: center;
  strong {
    margin-right: 10px;
    min-width: 85px;
  }
`;

export const BoxHistory = styled.div`
  padding: 10px 0;
  border-bottom: 1px dashed rgba(244, 255, 255, 0.2);
`;

export const LineH = styled.p`
  display: flex;
  font-size: 12px;
  font-weight: 300;
  margin: 4px 0 10px;
  align-items: center;

  strong {
    margin-right: 10px;
    min-width: 120px;
    size: 12px;
  }

  small {
    text-align: center;
    width: 100%;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const LineA = styled.p`
  display: flex;
  font-size: 11px;
  font-weight: 300;
  margin: 4px 0;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);

  strong {
    margin-right: 10px;
    min-width: 120px;
    size: 11px;
  }
`;
