import React, { useRef, useEffect, useState } from 'react';

import InputMask from 'react-input-mask';

import { useField } from '@rocketseat/unform';

export default function MaskInput({ name, label, inputMask, onBlur }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [mask, setMask] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
      clearValue: pickerRef => {
        pickerRef.setInputValue(null);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, fieldName]);

  function handleMask(e) {
    const { value } = e.target;
    return setMask(value);
  }

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <InputMask
        name={fieldName}
        mask={inputMask}
        onBlur={onBlur}
        value={mask}
        alwaysShowMask
        onChange={e => handleMask(e)}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}
