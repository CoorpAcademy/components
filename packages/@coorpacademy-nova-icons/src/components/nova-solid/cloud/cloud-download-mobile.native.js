import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 13c0-1 1-1 1-1h2L6.999 8.999C6 8 7 8 7 8h3V6c0-.273.078-.468.188-.612C9.091 4.281 8.077 4 7 4 4.243 4 2 6.243 2 9s2.243 5 5 5v-1zM15 0c-2.51 0-4.74 1.31-5.979 3.357.702.333 1.436.856 2.16 1.643H13c1 0 1 1 1 1v2h3s1 .001 0 1l-3 3h2c1 0 1 1 1 1v.705c2.888-.862 5-3.54 5-6.705 0-3.859-3.141-7-7-7z" />
      <G>
        <Path d="M12 12l3-3h-2V7h-2v2H9zM15 13H9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1 8h-4v-6h4v6z" />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
