import RadioWithTitle from '../../atom/radio-with-title';
import {propTypes, TitleRadioWrapperProps} from './types';

const TitleRadioWrapper = (props: TitleRadioWrapperProps) => {
  const {radioWithTitle} = props;
  // eslint-disable-next-line no-console
  console.log(props);
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div>{radioWithTitle ? <RadioWithTitle {...radioWithTitle} /> : null}</div>;
};

TitleRadioWrapper.propTypes = propTypes;
export default TitleRadioWrapper;
