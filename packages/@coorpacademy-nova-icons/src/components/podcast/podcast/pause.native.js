import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    viewBox="0 0 67 67"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    {...props}
  >
    <Path
      d="M5.417 5.417c0-1.25 1.25-2.5 2.916-2.5H25c1.667 0 2.917 1.25 2.917 2.916V61.25c0 1.667-1.25 2.917-2.917 2.917H8.333c-1.666 0-2.916-1.25-2.916-2.917V5.417zM38.75 5.417c0-1.25 1.25-2.5 2.917-2.5h16.666c1.667 0 2.917 1.25 2.917 2.916V61.25c0 1.667-1.25 2.917-2.917 2.917H41.667c-1.667 0-2.917-1.25-2.917-2.917V5.417z"
      fill={props.color}
      fillRule="nonzero"
    />
  </Svg>
);

export default SvgComponent;
