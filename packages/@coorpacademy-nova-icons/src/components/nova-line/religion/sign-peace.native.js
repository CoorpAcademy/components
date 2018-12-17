import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M13 2.051V2h-2v.051C5.954 2.555 2 6.823 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.177-3.954-9.445-9-9.949zM20 12a7.942 7.942 0 0 1-1.273 4.313L13 10.586V4.07c3.94.494 7 3.858 7 7.93zm-9 7.931a7.972 7.972 0 0 1-4.438-2.08L11 13.414v6.517zm2-6.517l4.438 4.438A7.972 7.972 0 0 1 13 19.932v-6.518zM11 4.07v6.516l-5.727 5.727A7.942 7.942 0 0 1 4 12c0-4.072 3.06-7.436 7-7.93z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
