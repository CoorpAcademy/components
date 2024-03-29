import * as React from 'react';
import Svg, {Defs, RadialGradient, Stop, Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 43" {...props}>
    <Defs>
      <RadialGradient
        id="prefix__a"
        cx={0.5}
        cy={1}
        r={1}
        gradientTransform="matrix(0 -1 .5 0 0 1.5)"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor={props.color} stopOpacity={0.365} />
        <Stop offset={0.752} stopColor={props.color} stopOpacity={0} />
        <Stop offset={1} stopColor={props.color} stopOpacity={0} />
      </RadialGradient>
    </Defs>
    <Path data-name="Rectangle 57" fill="url(#prefix__a)" d="M0 0h94v43H0z" />
  </Svg>
);

export default SvgComponent;
