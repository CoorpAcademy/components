import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import find from 'lodash/fp/find';
import parseTemplateString from '../../../util/parse-template-string';
import DropDown from '../drop-down';
import FreeText from '../free-text';
import style from './style.css';

const Template = props => {
  const totalTemplate = parseTemplateString(props.template);

  const templateCompose = map.convert({cap: false})((part, key) => {
    const type = part.type;

    if (type === 'string') {
      return part.value;
    }
    if (type === 'answerField') {
      const field = find({name: part.value}, props.answers);
      return field.type === 'text'
        ? <div className={style.answerType}>
            <FreeText {...field} key={part.value} className={style.text} />
          </div>
        : <div className={style.answerType}>
            <DropDown {...field} key={part.value} className={style.select} theme="template" />
          </div>;
    }
  }, totalTemplate);

  return (
    <div className={style.wrapper}>
      {templateCompose}
    </div>
  );
};

const TextPropTypes = {
  ...DropDown.propTypes,
  type: PropTypes.string,
  name: PropTypes.string
};

const DropDownPropTypes = {
  ...DropDown.propTypes,
  type: PropTypes.string,
  name: PropTypes.string
};

Template.propTypes = {
  template: PropTypes.string,
  answers: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.shape(DropDownPropTypes), PropTypes.shape(TextPropTypes)])
  )
};

export default Template;
