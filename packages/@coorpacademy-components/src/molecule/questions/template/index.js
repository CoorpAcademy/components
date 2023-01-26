import React from 'react';
import PropTypes from 'prop-types';
import {map, find} from 'lodash/fp';
import parseTemplateString from '../../../util/parse-template-string';
import DropDown from '../drop-down';
import FreeText from '../free-text';
import style from './style.css';

const Template = ({template, answers, groupAriaLabel}) => {
  const totalTemplate = parseTemplateString(template);
  const templateCompose = map.convert({cap: false})((part, key) => {
    const type = part.type;
    if (type === 'string') {
      return (
        <span
          key={key}
          className={style.textPart}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: part.value}}
        />
      );
    }
    if (type === 'answerField') {
      const field = find({name: part.value}, answers);
      if (!field) return null;
      const {type: fieldType, ...fieldProps} = field;
      const fieldView =
        fieldType === 'text' ? (
          <FreeText {...fieldProps} className={style.text} />
        ) : (
          <DropDown {...fieldProps} theme="player" />
        );

      return (
        <div className={style.answerType} key={part.value}>
          {fieldView}
        </div>
      );
    }
  }, totalTemplate);

  return (
    <form>
      <div
        data-name="template-wrapper"
        className={style.wrapper}
        role="group"
        aria-label={groupAriaLabel}
      >
        {templateCompose}
      </div>
    </form>
  );
};

const TextPropTypes = {
  ...DropDown.propTypes,
  type: PropTypes.string
};

Template.propTypes = {
  template: PropTypes.string,
  answers: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.shape(DropDown.propTypes), PropTypes.shape(TextPropTypes)])
  ),
  groupAriaLabel: PropTypes.string
};

export default Template;
