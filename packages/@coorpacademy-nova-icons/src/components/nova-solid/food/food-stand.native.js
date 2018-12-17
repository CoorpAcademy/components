import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M4 20h2v2H4zM4 10h2V7.414l1-1 1.293 1.292a.999.999 0 0 0 1.414 0L11 6.414l1.293 1.292a.999.999 0 0 0 1.414 0L15 6.414l1 1V10h2V7.414l1.707-1.708A.993.993 0 0 0 20 5V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2c0 .266.105.519.293.707L4 7.414V10zm5-4.414l-1-1V4h2v.586l-1 1zm4 0l-1-1V4h2v.586l-1 1zm5-1l-1 1-1-1V4h2v.586zM4 4h2v.586l-1 1-1-1V4zM4 11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9.006a3.998 3.998 0 0 1 4.627-3.951c.125.02.245.057.367.088V13h4v-2H4z" />
      <Path d="M17.588 16.056a3.002 3.002 0 1 0-1.175 5.888 3.001 3.001 0 1 0 1.175-5.888z" />
    </G>
  </Svg>
);

export default SvgComponent;
