import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 16.999h2v2h-2zM17 4.999h2v2h-2zM5 16.999h2v2H5z" />
      <Path d="M20 1.999H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2zm-16 2h4v4H4v-4zm4 16H4v-4h4v4zm1-6H4v-4h2v2h3v2zm5 6h-4v-2h4v2zm0-7h-1v3h-2v-5h3v2zm0-7h-2v3h-2v-5h4v2zm6 14h-4v-4h4v4zm0-6h-2v-2h-2v-2h4v4zm0-6h-4v-4h4v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
