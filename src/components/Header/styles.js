import styled from 'styled-components';

export const MenuMobile = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  flex-wrap: wrap;

  a {
    font-size: 17px;
    color: #6e2d72;
    margin: 10px;
    &:hover {
      color: #af3d6f;
      transition: 0.3s all;
    }
  }

  @media (max-width: 999px) {
    display: flex;
    background: #f4f4f4;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding: 20px;
    width: 250px;
    height: 100vh;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;

    a {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      display: block;
      width: 100%;
      padding: 10px;

      margin: 0;
      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export const Container = styled.div`
  background: #fff;

  padding: 0 8%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2000;
  border-bottom: 1px solid #ccc;
  .activeLink {
    color: #d54a86;
  }
  @media (max-width: 999px) {
    padding: 0 4%;
  }
`;

export const Content = styled.header`
  height: 80px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  h1 {
    color: #fff;
    position: absolute;
    left: -999px;
    top: -40px;
  }

  img {
    height: 70px;
  }

  /*  nav {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    flex-wrap: wrap;

    a {
      font-size: 17px;
      color: #6e2d72;
      margin: 10px;
      &:hover {
        color: #af3d6f;
        transition: 0.3s all;
      }
    }
  }
 */
  i {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: #6e2d72;
    display: none;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 25px;
  }

  @media (max-width: 999px) {
    i {
      display: flex;
    }
  }
`;
