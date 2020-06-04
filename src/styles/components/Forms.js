import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import Select from 'react-select';

export const FormCustom = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const SelectCustom = styled(Select)`
  background: rgba(0, 0, 0, 0.2);
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
  option {
    color: #666;
    background: #000;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  &:focus {
    border-color: #4db1a6;
  }
`;

export const FormUnform = styled(Form)``;

export const ContentForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-basis: ${props => `${props.basis}%`};
  margin-bottom: 18px;

  label {
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
  }
  span {
    color: red;
    font-size: 14px;
    margin: 5px 0 0px 0 !important;
    width: 100%;
  }

  input {
    background: rgba(0, 0, 0, 0.2);
    padding: 8px 15px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => (props.errorr ? 'red' : 'rgba(0, 0, 0, 0.1)')};
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

  select {
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
    option {
      color: #666;
      background: #f4f4f4;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
    }

    &:focus {
      border-color: #4db1a6;
    }
  }

  textarea {
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

  .custom_select {
    width: 100%;
  }
  .css-bg1rzq-control {
  }
  /* .css-1pcexqc-container custom_select{} */
`;

export const BoxChecksRadio = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;

  p {
    width: 100%;
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const CheckBox = styled.div`
  flex-basis: ${props => `${props.basis}%`};
  display: inline-block;
  margin-bottom: 8px;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer; /* affiche un curseur adapté */
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 1px;
      width: 17px;
      height: 17px; /* dim. de la case */
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px; /* angles arrondis */
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3); /* légère ombre interne */
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -1px;
      left: 2px;
      font-size: 16px;
      color: #4db1a6;
      transition: all 0.2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
    &:after {
      opacity: 0; /* coche invisible */
      transform: scale(0); /* mise à l'échelle à 0 */
    }
  }
  > input:disabled:not(:checked) + label {
    &:before {
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;

export const BoxInputLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: ${props => `${props.basis}%`};

  label {
    color: #fff;
    font-size: 14px;
    margin-right: 5px;
  }

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

  .custom_select {
    width: 100%;
  }
  .css-bg1rzq-control {
  }
  /* .css-1pcexqc-container custom_select{} */
`;

export const BoxInputSearch = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-basis: ${props => `${props.basis}%`};

  label {
    color: #fff;
    font-size: 14px;
    margin-right: 10px;
  }

  input {
    background: rgba(0, 0, 0, 0.2);
    padding: 8px 15px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => (props.errorr ? 'red' : 'rgba(0, 0, 0, 0.1)')};
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
`;
