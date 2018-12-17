import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19 3.001H5c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h7c.82 0 1.835-.421 2.414-1L20 14.416c.58-.58 1-1.595 1-2.414v-7a2.002 2.002 0 0 0-2-2.001zm-7 16v-5a2 2 0 0 1 2-2h5l-7 7z"
    />
  </Svg>
);

export default SvgComponent;
