import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M15.936 13.228c-.378.038-.74.103-1.089.179a12.338 12.338 0 0 0 1.976-1.588c2.343-2.344 3.182-5.304 3.182-5.304s-2.96.839-5.304 3.182a12.347 12.347 0 0 0-1.696 2.146V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5.491c.881.18 1.985.31 3.18.19C18.912 15.424 21 13.966 21 13.966s-2.336-1.013-5.064-.738zM11.004 14h-3V9h3v5zm0-10v3h-3V4h3zm-3 16v-4h3v4h-3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
