import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M20.749 4.707l-1.415-1.414-7.292 7.293-7.293-7.293-1.415 1.414L10.627 12l-7.293 7.293 1.415 1.414 7.293-7.293 7.292 7.293 1.415-1.414L13.456 12z"
    />
  </Svg>
);

export default SvgComponent;
