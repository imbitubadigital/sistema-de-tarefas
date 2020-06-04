import React, { useRef, useEffect, useState } from 'react';
// import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input';

import { useField } from '@rocketseat/unform';

export default function MoneyInput({ name, label, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [money, setMask] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
      clearValue: () => setMask(0),
    });
  }, [fieldName, registerField]);

  function handleMoney(e) {
    const { value } = e.target;
    return setMask(value);
  }

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <CurrencyInput
        name={fieldName}
        value={money}
        ref={ref}
        onChangeEvent={e => handleMoney(e)}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}
