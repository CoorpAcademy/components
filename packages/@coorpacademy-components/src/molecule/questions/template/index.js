import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import find from 'lodash/fp/find';
import parseTemplateString from '../../../util/parse-template-string';
import Select from '../../../atom/select';
import DropDown from '../drop-down';
import FreeText from '../free-text';
import style from './style.css';

const Template = props => {
  const totalTemplate = parseTemplateString(props.template);

  const templateCompose = map.convert({cap: false})((part, key) => {
    const type = part.type;

    if (type === 'string') {
      return <div className={style.string} key={key}>{part.value}</div>;
    }
    if (type === 'answerField') {
      const field = find({name: part.value}, props.answerFields);

      return field.type === 'text'
        ? <FreeText {...field} key={part.value} className={style.field} />
        : <DropDown {...field} key={part.value} className={style.field} />;
    }
  }, totalTemplate);

  return (
    <div className={style.wrapper}>
      {templateCompose}
    </div>
  );
};

const TextPropTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
const DropDownPropTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: Select.propTypes.onChange,
  options: Select.propTypes.options
};

Template.propTypes = {
  template: PropTypes.string,
  answerFields: PropTypes.oneOfType([
    PropTypes.shape(DropDownPropTypes),
    PropTypes.shape(TextPropTypes)
  ])
};

export default Template;
