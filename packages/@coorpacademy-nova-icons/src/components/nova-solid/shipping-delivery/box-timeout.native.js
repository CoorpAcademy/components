import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.464A.998.998 0 0 0 15 .018h-4v6h8.535L15.832.464zM9 .018H5a.998.998 0 0 0-.832.446L.465 6.018H9v-6zM18 10.016c.692 0 1.359.097 2 .263v-2.26H0v11a1 1 0 0 0 1 1h9.263A8.028 8.028 0 0 1 10 18.016a8 8 0 0 1 8-8z" />
      <Path d="M18 12c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
