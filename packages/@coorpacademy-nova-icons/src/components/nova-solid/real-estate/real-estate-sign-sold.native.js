import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M9.875 11.25a.626.626 0 0 0-.625.625v1.25a.625.625 0 0 0 1.25 0v-1.25a.626.626 0 0 0-.625-.625zM18.25 11.25v2.5a1.25 1.25 0 0 0 0-2.5z" />
      <Path d="M22 7H2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM6.75 11.25H4.562a.312.312 0 1 0 0 .624h.625A1.564 1.564 0 0 1 5.188 15H3v-1.25h2.188a.312.312 0 0 0 0-.624h-.626a1.563 1.563 0 0 1 0-3.126H6.75v1.25zm5 1.875c0 1.034-.842 1.875-1.875 1.875S8 14.159 8 13.125v-1.25C8 10.842 8.842 10 9.875 10s1.875.842 1.875 1.875v1.25zM16 15h-3v-5h1.25v3.75H16V15zm2.25 0H17v-5h1.25c1.379 0 2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
