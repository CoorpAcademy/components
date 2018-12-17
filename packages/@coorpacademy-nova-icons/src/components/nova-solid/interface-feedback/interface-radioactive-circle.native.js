import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 .001c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zM8.003 5.079l2.503 4.333A2.988 2.988 0 0 0 9 12H4a7.985 7.985 0 0 1 4.003-6.921zM12 20a7.952 7.952 0 0 1-3.997-1.077l2.503-4.336c.441.256.947.413 1.494.413s1.053-.157 1.494-.413l2.503 4.336A7.952 7.952 0 0 1 12 20zm3-8c0-1.11-.609-2.068-1.506-2.588l2.503-4.333A7.985 7.985 0 0 1 20 12h-5z"
    />
  </Svg>
);

export default SvgComponent;
