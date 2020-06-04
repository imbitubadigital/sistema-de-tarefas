import styled from 'styled-components';
import DataTable from 'react-data-table-component';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead {
    tr {
      background: rgba(0, 0, 0, 0.2);
    }
  }

  tbody {
    tr {
      &:hover {
        background: rgba(0, 0, 0, 0.18);
        transition: 0.2s all;
      }
    }
  }
`;

export const Tth = styled.th`
  padding: 8px;
  text-align: left;
  font-size: 14px;
  font-weight: 400;
`;

export const Ttd = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 14px;
  font-weight: 300;
  span {
    padding: 5px;
    margin: 4px 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  img {
    border-radius: 100px;
  }
`;
export const NoResult = styled.div`
  text-align: center;
  font-size: 12px;
`;

export const BoxBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;

  a {
    border-radius: 3px;
    background: #7289da;
    border: 0;
    color: #fff;
    font-size: 12px;
    padding: 9.2px 12.4px;
    text-transform: uppercase;
    font-weight: 400;
    text-decoration: none;

    font-size: 14px;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }

  button {
    margin-left: 6px;
    padding: 0 12.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      margin: 0;
      font-size: 12px;
    }
  }
`;

export const DatatableCustom = styled(DataTable)`
  border-collapse: collapse;
  width: 100%;

  .rdt_TableHeader {
    display: none;
    border-bottom: 0;
  }

  .rdt_TableHead {
    background: rgba(0, 0, 0, 0.2);
    border-top: 0;
    div {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .rdt_TableRow {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    &:hover {
      background: rgba(0, 0, 0, 0.18);
      transition: 0.2s all;
    }
  }

  .rdt_TableFooter {
    color: #fff;
    span,
    div,
    select,
    button {
      color: #fff;
    }
    .kLmFWx svg {
      fill: #fff;
      stroke: #fff;
      stroke-width: 0.7;
    }
  }

  .sc-ibxdXY {
    svg {
      /*  fill: #fff;
      stroke: #fff;
      stroke-width: 0.7; */
      color: rgba(255, 255, 255, 1);
    }
}

    .ekzydS svg {
      color: rgba(255, 255, 255, 1);
    }
    select {
      option {
        color: #000;
      }
    }
  }
`;

export const Search = styled.div`
  flex-basis: 320px;
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  input {
    background: rgba(0, 0, 0, 0.2);
    padding: 8px 15px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => (props.error ? 'red' : 'rgba(0, 0, 0, 0.1)')};
    width: 100%;
    color: #dcdfd9;
    font-size: 16px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #c9cdc5;
    }
    :-ms-input-placeholder {
      color: #c9cdc5;
    }

    &:focus {
      border-color: #4db1a6;
    }
  }

  button{
    background: rgba(255,255,255,0);
    border: 1px solid rgba(255,255,255,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 40px;
    height: 36px;
    margin-left: 4px;
    i {
      color: #fff
      font-size: 14px;
    }

    &:hover {
      background: rgba(255,255,255,0.2);
      transition: 0.3s all;
    }
`;
