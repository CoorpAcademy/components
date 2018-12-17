import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M8 11a4 4 0 1 0-.002-8.002A4 4 0 0 0 8 11zM5 6h2V4h2v2h2v2H9v2H7V8H5V6z" />
      <Path d="M13 6h-.101a5 5 0 1 1-9.798 0H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h4v-3h2v3h5V7a1 1 0 0 0-1-1zm-1 12H4v-1h8v1zm0-3H4v-1h8v1zM21 11h-6v12h6a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1zm-1 7h-3v-1h3v1zm0-3h-3v-1h3v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
