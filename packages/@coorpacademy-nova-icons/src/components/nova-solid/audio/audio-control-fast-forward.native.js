import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M12 2.003c-5.514 0-10 4.486-10 10 0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 14V12.67l-5 3.333v-8l5 3.333V8.003l6 4-6 4z"
    />
  </Svg>
);

export default SvgComponent;
