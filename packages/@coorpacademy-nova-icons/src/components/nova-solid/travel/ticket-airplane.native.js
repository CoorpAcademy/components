import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M22 4H2C.9 4 0 4.9 0 6v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm15.934 2.298a1.003 1.003 0 0 1-.537.561l-2.732 1.205-2.191 4.002-1.798.934 1.523-3.953L14 14.061l-4-2.006 1.584-.913 2.102.939L16.116 11c-.189 0-3.076-1.922-3.235-2.025l1.607-.832 3.321 2.104 2.806-1.249a1.01 1.01 0 0 1 1.319 1.3z"
    />
  </Svg>
);

export default SvgComponent;
