import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      fill={props.color}
      d="M8 0l1.888 6.111H16L11.056 9.89 12.944 16 8 12.223 3.056 16l1.888-6.111L0 6.11h6.112z"
      fillRule="nonzero"
    />
  </Svg>
);

export default SvgComponent;
