import * as React from 'react';
import Svg, {Defs, Path, ClipPath, Use, G} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" x={0} y={0} viewBox="0 0 50 50" xmlSpace="preserve" {...props}>
    <Defs>
      <Path id="prefix__SVGID_1_" d="M0 0h50v50H0z" />
    </Defs>
    <ClipPath id="prefix__SVGID_2_">
      <Use xlinkHref="#prefix__SVGID_1_" overflow="visible" />
    </ClipPath>
    <G clipPath="url(#prefix__SVGID_2_)">
      <Path
        className="prefix__st1"
        d="M49 36.5c0 1.2-.9 2.1-2.1 2.1H3.1C2 38.5 1 37.6 1 36.5V5.2c0-1.1 1-2.1 2.1-2.1h43.8c1.1 0 2.1 1 2.1 2.1v31.3z"
      />
      <Path className="prefix__st2" d="M14.6 44.8h20.8" />
      <Path className="prefix__st1" d="M21.9 38.5v6.2M28.1 38.5v6.2" />
      <Path className="prefix__st2" d="M26 22.9l14.6-6.2L26 10.4l-14.6 6.3L26 22.9z" />
      <Path
        className="prefix__st2"
        d="M17.7 19.8v7.3l8.3 4.2 8.3-4.2v-7.3M11.5 16.7V24M11.5 24l-2.1 6.2h4.2L11.5 24z"
      />
    </G>
  </Svg>
);

export default SvgComponent;
