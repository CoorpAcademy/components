import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M8.375 13.999c0-1.611 1.014-2.625 2.625-2.625 1.61 0 2.625 1.014 2.625 2.625h-5.25z"
      fill="currentColor"
    />
    <Circle cx={11} cy={8.749} r={1.75} fill="currentColor" />
    <Path
      d="M21 2.999v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1l3 1v-4l-3 1z"
      fill="currentColor"
    />
    <Path
      d="M21.632 20.733L20 15.837V8.999h-2v6H4v-9h9v-2H3a1 1 0 0 0-1 1v10.838L.368 20.733c-.186.558-.11 1.13.208 1.571s.836.695 1.424.695h18c.588 0 1.107-.253 1.425-.694s.393-1.014.207-1.572zm-19.244.266l1.333-4H18.28l1.333 4H2.388z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M9 17.999h4v2H9z" />
  </Svg>
);

export default SvgComponent;
