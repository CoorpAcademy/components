import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.217 4.783c-1.511-1.512-3.52-2.343-5.657-2.343s-4.145.831-5.656 2.343a7.946 7.946 0 0 0-2.343 5.657c0 1.799.596 3.503 1.685 4.901l-4.392 4.392 1.414 1.414 4.392-4.393a7.928 7.928 0 0 0 4.9 1.686 7.949 7.949 0 0 0 5.657-2.344 7.945 7.945 0 0 0 2.343-5.656 7.946 7.946 0 0 0-2.343-5.657zm-9.899 9.899a5.922 5.922 0 0 1-1.741-4.569l6.312 6.312a5.935 5.935 0 0 1-4.571-1.743zm8.485 0a5.973 5.973 0 0 1-1.66 1.169L8.149 7.856a6.02 6.02 0 0 1 1.169-1.659c1.133-1.133 2.64-1.757 4.243-1.757s3.109.624 4.243 1.757a5.96 5.96 0 0 1 1.757 4.243 5.962 5.962 0 0 1-1.758 4.242z" />
      <Circle cx={14.061} cy={7.94} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
