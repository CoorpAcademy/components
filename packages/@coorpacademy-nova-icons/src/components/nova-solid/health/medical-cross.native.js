import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001.001H24v24.001H-.001z" />
    <Path
      fill="currentColor"
      d="M20.795 9.231l-2-3.463L14 8.537V3h-4v5.535L5.206 5.768l-2 3.464L8 12l-4.794 2.768 2 3.463L10 15.464V21h4v-5.536l4.795 2.768 2-3.464L16.001 12z"
    />
  </Svg>
);

export default SvgComponent;
