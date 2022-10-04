import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm-1 4h2v7h-2V6zm1 11.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
    />
  </Svg>
);

export default SvgComponent;
