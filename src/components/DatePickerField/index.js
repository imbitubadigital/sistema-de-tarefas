import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';

const DatePickerField = ({ name, value, onChange }) => {
  return (
    <ReactDatePicker
      selected={value || null}
      dateFormat="dd/MM/yyyy"
      onChange={val => {
        onChange(name, val);
      }}
    />
  );
};

DatePickerField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  onChange: PropTypes.func,
};

DatePickerField.defaultProps = {
  onChange: null,
};

export default DatePickerField;
