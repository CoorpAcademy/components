import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2c-4.411 0-8 3.589-8 8 0 2.979 1.64 5.577 4.061 6.954a4.976 4.976 0 0 1 1.689-1.395C7.554 14.665 6 12.513 6 10c0-3.309 2.691-6 6-6s6 2.691 6 6c0 2.513-1.554 4.665-3.75 5.559a4.988 4.988 0 0 1 1.689 1.395C18.36 15.577 20 12.979 20 10c0-4.411-3.589-8-8-8z" />
      <Path d="M13 17.184V16h-2v1.184A2.99 2.99 0 0 0 9 20a3 3 0 0 0 6 0 2.99 2.99 0 0 0-2-2.816zM12 22a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
