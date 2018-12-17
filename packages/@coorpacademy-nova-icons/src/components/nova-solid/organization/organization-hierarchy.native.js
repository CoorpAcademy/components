import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21 16.184V14c0-1.654-1.346-3-3-3h-5V8h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6v3H6c-1.654 0-3 1.346-3 3v2.184A2.996 2.996 0 0 0 1 19c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 0 0-2-2.816V14c0-.551.449-1 1-1h5v3.184A2.996 2.996 0 0 0 9 19c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 0 0-2-2.816V13h5c.551 0 1 .449 1 1v2.184A2.997 2.997 0 0 0 17 19c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 0 0-2-2.816z"
    />
  </Svg>
);

export default SvgComponent;
