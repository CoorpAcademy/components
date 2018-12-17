import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.5 10.001H3v7h8.5a3.5 3.5 0 0 0 0-7zm0 5H10v-3h1.5a1.5 1.5 0 1 1 0 3z" />
      <Path d="M19.094 5.907L21 4.001h-4l2-2h-5v5l2-2v4l1.615-1.614c.635 1.985.803 4.107.479 6.184a13.403 13.403 0 0 1-3.8 7.481l1.412 1.416a15.383 15.383 0 0 0 4.364-8.589 15.49 15.49 0 0 0-.872-8.011l-.104.039z" />
    </G>
  </Svg>
);

export default SvgComponent;
