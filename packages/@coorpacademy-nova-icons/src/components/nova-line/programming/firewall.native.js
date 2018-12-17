import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21 14h-6.103C16.148 13.073 17 11.6 17 10c0-2.347-1.161-3.575-1.293-3.706a1 1 0 0 0-1.262-.126L13 7.131V1c0-.44-.289-.83-.71-.956a.996.996 0 0 0-1.122.401C10.741 1.086 7 6.79 7 10c0 1.641.806 3.088 2.031 4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zM11 4.624V9a1 1 0 0 0 1.554.831L14.7 8.402c.158.379.3.909.3 1.598 0 1.387-1.311 3-3 3-1.654 0-3-1.346-3-3 0-1.316.981-3.493 2-5.376zM20 18h-5v-2h5v2zM8 18v-2h5v2H8zm8 2v2h-5v-2h5zM6 16v2H4v-2h2zm-2 4h5v2H4v-2zm14 2v-2h2v2h-2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
