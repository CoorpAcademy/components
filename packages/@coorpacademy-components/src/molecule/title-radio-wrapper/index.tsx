import React from 'react';
import RadioWithTitle from '../../atom/radio-with-title';
import {propTypes, TitleRadioWrapperProps} from './types';

const TitleRadioWrapper = (props: TitleRadioWrapperProps) => {
  const {radioWithTitle} = props;
  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <div>
      <div>{radioWithTitle ? <RadioWithTitle {...radioWithTitle} /> : null}</div>
    </div>
  );
};

TitleRadioWrapper.propTypes = propTypes;

export default TitleRadioWrapper;
