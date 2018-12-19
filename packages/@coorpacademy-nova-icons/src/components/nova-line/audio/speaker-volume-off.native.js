import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.707 5.707l-1.414-1.414-17 17 1.414 1.414 5.172-5.171 2.62 3.745c.417.496.959.72 1.526.72a1.995 1.995 0 0 0 2-2V11.39l5.682-5.683zm-7.68 14.269l-2.711-3.877 2.711-2.711v6.588zM7.025 14.732V11h3.521l3.479-4.973v1.705l1.965-1.965a1.974 1.974 0 0 0-1.201-1.615 2.017 2.017 0 0 0-2.178.434L9.504 9H7.025c-1.103 0-2 .898-2 2v4c0 .483.179.921.465 1.268l1.535-1.536z" />
    </G>
  </Svg>
);

export default SvgComponent;
