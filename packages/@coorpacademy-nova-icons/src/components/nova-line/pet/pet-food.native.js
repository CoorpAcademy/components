import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.986 14.836A1 1 0 0 0 20 14a4.006 4.006 0 0 0-3.413-3.957C15.814 8.219 14.021 7 12 7s-3.814 1.219-4.587 3.043A4.006 4.006 0 0 0 4 14a1 1 0 0 0-.986.836l-1 6A1 1 0 0 0 3 22h18a.998.998 0 0 0 .986-1.165l-1-5.999zM7.935 11.998l.97.049.201-.785C9.446 9.93 10.636 9 12 9s2.554.93 2.894 2.262l.201.785c.044-.002.947-.032.905-.047 1.103 0 2 .896 2 2H6c0-1.104.897-2 1.935-2.002zM4.181 20l.667-4h14.306l.667 4H4.181z" />
      <Path d="M9 17h6v2H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
