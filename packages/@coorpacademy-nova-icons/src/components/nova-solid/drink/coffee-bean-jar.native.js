import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 4.999h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 .999zM16.969 5.999H7.031C5.806 6.912 5 8.358 5 10v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10c0-1.642-.806-3.088-2.031-4.001zM8 13.5C8 11.015 9.791 9 12 9c.312 0 .613.05.905.126L10 13l2 2-1.704 2.556C8.942 16.834 8 15.295 8 13.5zm4 4.5a3.58 3.58 0 0 1-.905-.126L14 14l-2-2 1.704-2.557C15.058 10.165 16 11.703 16 13.5c0 2.484-1.791 4.5-4 4.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
