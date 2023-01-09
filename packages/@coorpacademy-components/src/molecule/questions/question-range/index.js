import React from 'react';
import {getOr} from 'lodash/fp';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Provider, {GetSkinFromContext} from '../../../atom/provider';
import Range from '../../../atom/range';
import style from './style.css';

const QuestionRange = (props, legacyContext) => {
  const {title, minLabel, maxLabel, ...rangeProps} = props;

  const skin = GetSkinFromContext(legacyContext);
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);

  const titleStyle = {
    color: defaultColor
  };

  return (
    <div className={style.wrapper} role="group">
      <span
        style={titleStyle}
        className={classnames(style.title, style.innerHTML)}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: title}}
      />
      <Range {...rangeProps} />
      <div className={style.labelWrapper}>
        <span
          className={classnames(style.label, style.innerHTML)}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: minLabel}}
        />
        <span
          className={classnames(style.label, style.innerHTML)}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: maxLabel}}
        />
      </div>
    </div>
  );
};

QuestionRange.contextTypes = {
  skin: Provider.childContextTypes.skin
};

QuestionRange.propTypes = {
  ...Range.propTypes,
  title: PropTypes.string,
  minLabel: PropTypes.string,
  maxLabel: PropTypes.string
};

export default QuestionRange;
