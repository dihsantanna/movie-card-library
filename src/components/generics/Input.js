import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      name,
      id,
      classNameInput,
      classNameLabel,
      onChange,
      type,
      step,
      value,
      checked,
      textLabel,
    } = this.props;

    return (
      <label
        htmlFor={ id }
        className={ classNameLabel }
      >

        { textLabel }

        <input
          name={ name }
          id={ id }
          type={ type }
          step={ step }
          value={ value }
          onChange={ onChange }
          className={ classNameInput }
          checked={ checked }
        />

      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameLabel: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  step: PropTypes.string,
  value: PropTypes.node,
  checked: PropTypes.bool,
  textLabel: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  classNameInput: '',
  classNameLabel: '',
  onChange: () => {},
  type: 'text',
  step: '',
  value: '',
  checked: false,
  textLabel: '',
};

export default Input;
