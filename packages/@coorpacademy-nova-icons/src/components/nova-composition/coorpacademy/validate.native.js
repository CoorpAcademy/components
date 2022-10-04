import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 170" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#3EC483"
      d="M85 0c46.9 0 85 38.1 85 85s-38.1 85-85 85S0 131.9 0 85 38.1 0 85 0z"
    />
    <Path fill="#FFF" d="M76.9 114.5L47 84.6l11.4-11.5 18.5 18.6L111.6 57 123 68.4z" />
  </Svg>
);

export default SvgComponent;
