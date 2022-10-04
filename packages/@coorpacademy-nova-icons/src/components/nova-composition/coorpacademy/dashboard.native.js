import * as React from 'react';
import Svg, {G, Defs, Path, ClipPath, Use} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg
    id="prefix__Calque_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x={0}
    y={0}
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Defs>
        <Path id="prefix__SVGID_1_" d="M0 0h24v24H0z" />
      </Defs>
      <ClipPath id="prefix__SVGID_2_">
        <Use xlinkHref="#prefix__SVGID_1_" overflow="visible" />
      </ClipPath>
      <G clipPath="url(#prefix__SVGID_2_)">
        <Path
          className="prefix__st1"
          d="M8.4 8.4H24v6H8.4v-6zM24 6V1.2c0-.7-.5-1.2-1.2-1.2H1.2C.5 0 0 .5 0 1.2V6h24zM6 8.4H0v14.4c0 .7.5 1.2 1.2 1.2H6V8.4zM8.4 16.8V24h14.4c.7 0 1.2-.5 1.2-1.2v-6H8.4z"
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
