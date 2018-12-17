import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.2 11.403L10.8 3.602c-.44-.33-.8-.149-.8.4v2.75l7 5.25-7 5.25v2.75c0 .55.36.73.8.4l10.4-7.801c.44-.328.44-.869 0-1.198z" />
      <Path d="M13.2 11.403L2.8 3.602c-.44-.329-.8-.149-.8.401v16c0 .55.36.73.8.4l10.4-7.801c.44-.329.44-.87 0-1.199z" />
    </G>
  </Svg>
);

export default SvgComponent;
