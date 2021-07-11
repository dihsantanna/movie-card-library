import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  renderOptions(options) {
    const optionsArr = Object.entries(options);
    return optionsArr
      .map((option) => (
        <option
          value={ option[1] }
          key={ option[0] }
        >

          { option[0] }

        </option>
      ));
  }

  render() {
    const {
      id,
      name,
      classNameLabel,
      classNameSelect,
      onChange,
      value,
      textLabel,
      options,
    } = this.props;

    return (
      <label
        htmlFor={ id }
        className={ classNameLabel }
      >

        { textLabel }

        <select
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
          className={ classNameSelect }
        >

          { this.renderOptions(options) }

        </select>

      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameSelect: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  textLabel: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};

Select.defaultProps = {
  name: '',
  classNameLabel: '',
  classNameSelect: '',
  onChange: () => {},
  value: '',
  textLabel: '',
};

export default Select;
