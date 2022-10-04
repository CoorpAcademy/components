import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M21.707 8.293l-6-6a.999.999 0 00-1.414 0l-12 12A1.002 1.002 0 003 16h5v5a1 1 0 001.707.707l12-12a.999.999 0 000-1.414z"
    />
  </Svg>
);

export default SvgComponent;
