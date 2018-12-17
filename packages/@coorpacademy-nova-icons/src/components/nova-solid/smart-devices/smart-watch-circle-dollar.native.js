import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.8 8.001h-1.6v.84c-.912.185-1.6.994-1.6 1.96 0 1.102.898 2 2 2h.8a.4.4 0 0 1 0 .799H9.6v1.601h1.6v.8h1.6v-.84a2.004 2.004 0 0 0 1.601-1.96c0-1.102-.898-2-2-2H11.6a.4.4 0 0 1 0-.799h2.8V8.801h-1.6v-.8z" />
      <Path d="M16.318 5.273L15 .001H9L7.682 5.273a7.987 7.987 0 0 0 0 13.455L9 24.001h6l1.318-5.272a7.987 7.987 0 0 0 0-13.456zM12 18.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
