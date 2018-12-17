import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 17h-2.934c.769-1.215 1.193-2.731 1.193-4.476C19.26 7.658 16.088 2 12 2 7.915 2 4.747 7.656 4.747 12.521c0 1.746.425 3.263 1.193 4.479H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-13.06-.594c-.986-1.178-1.193-2.762-1.193-3.885C6.747 8.38 9.447 4 12 4c2.557 0 5.26 4.382 5.26 8.524 0 1.122-.207 2.706-1.194 3.883a3.895 3.895 0 0 1-.644.593H8.584a3.983 3.983 0 0 1-.644-.594zM20 21H4v-2h16v2z" />
      <Path d="M11.5 9H15V7h-2V6h-2v1.051C9.86 7.283 9 8.293 9 9.5c0 1.378 1.121 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.051c1.14-.232 2-1.243 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
