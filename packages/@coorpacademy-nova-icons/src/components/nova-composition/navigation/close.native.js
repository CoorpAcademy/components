import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" {...props}>
    <Path
      fill={props.color}
      d="M11.1 2.7c.5-.5.5-1.3 0-1.8S9.8.4 9.3.9L6 4.2 2.7.9C2.2.4 1.4.4.9.9S.4 2.2.9 2.7L4.2 6 .9 9.3c-.5.5-.5 1.3 0 1.8s1.3.5 1.8 0L6 7.8l3.3 3.3c.5.5 1.3.5 1.8 0s.5-1.3 0-1.8L7.8 6l3.3-3.3z"
    />
  </Svg>
);

export default SvgComponent;
