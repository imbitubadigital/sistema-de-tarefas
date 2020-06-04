import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `,
};

const colors = {
  default: css`
    background: #0099de;

    &:hover {
      background: #0074a6;
      transition: 0.3s all;
    }
  `,

  danger: css`
    background: #e85756;

    &:hover {
      background: #d81d1d;
      transition: 0.3s all;
    }
  `,

  yellow: css`
    background: #deb71c;

    &:hover {
      background: #c5a318;
      transition: 0.3s all;
    }
  `,

  gray: css`
    background: #b9bbbe;
    color: #666;

    &:hover {
      background: #999;
      transition: 0.3s all;
    }
  `,

  green: css`
    background: #209d90;

    &:hover {
      background: #187a71;
      transition: 0.3s all;
    }
  `,

  greenShow: css`
    background: #8fb800;

    &:hover {
      background: #617d00;
      transition: 0.3s all;
    }
  `,

  purple: css`
    background: #c400c4;

    &:hover {
      background: #8c008c;
      transition: 0.3s all;
    }
  `,

  transparent: css`
    background: rgba(255, 255, 255, 0);
    border: 1px solid rgba(255, 255, 255, 0.4);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transition: 0.3s all;
    }
  `,
};

const Button = styled.button`
  border-radius: 4px;
  transition: background-color 0.16s ease;
  background: #7289da;
  border: 0;
  color: #fff;
  font-size: 12px;
  padding: 0 30px;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    margin-right: 10px;
  }

  ${props => sizes[props.size] || 'default'}
  ${props => colors[props.color] || 'default'}

  ${props =>
    props.filled === false &&
    css`
      background: none;

      &:hover {
        background: none;
        opacity: 0.6;
      }
    `}
`;

export default Button;
