import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './description.css';

const Description = (props, context) => {
  const {className, description} = props;
  return description
    ? <div className={classnames(style.descriptionWrapper, className)}>
        <div className={style.description}>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: description
            }}
          />
        </div>
      </div>
    : null;
};

Description.propTypes = {
  description: PropTypes.string,
  className: PropTypes.string
};
export default Description;
