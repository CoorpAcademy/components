import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M6.103 13.002l-1.975-.32A7.962 7.962 0 0 1 8.832 6.63l.798 1.834a6.048 6.048 0 0 0-3.527 4.538zM17.834 13.002a6.048 6.048 0 0 0-3.527-4.538l.798-1.834a7.962 7.962 0 0 1 4.704 6.052l-1.975.32z"
    />
    <Path
      fill="currentColor"
      d="M24 14h-2c0-4.454-2.991-8.412-7.273-9.624l.545-1.924C20.411 3.907 24 8.655 24 14zM2 14H0C0 8.654 3.588 3.907 8.727 2.453l.544 1.924C4.99 5.588 2 9.545 2 14zM15 16.272V13a3 3 0 0 0-6 0v3.272c0 1.045-.956 1.818-2 1.818V19h10v-.909c-1.044 0-2-.773-2-1.819zM12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z"
    />
  </Svg>
);

export default SvgComponent;
