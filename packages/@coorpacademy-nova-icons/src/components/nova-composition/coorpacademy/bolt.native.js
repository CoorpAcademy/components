import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      fill={props.color}
      d="M16.617 0L4 12.245h4.681l-3.6 9.293L18 9.29h-4.68L16.617 0l-4.052 5.516"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
