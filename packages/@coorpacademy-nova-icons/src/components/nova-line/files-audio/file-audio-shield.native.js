import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.266 8.367L8 6.612v5.438a2.5 2.5 0 1 0 2 2.45V9.388l2.633.877.633-1.898z" />
      <Path d="M2 2h10v4h4v3h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M12 11v6.98c0 3.813 3.796 5.579 5.804 5.98L18 24l.196-.04C20.204 23.559 24 21.792 24 17.98V11H12zm10 6.98c0 2.763-3.153 3.757-3.998 3.973C17.175 21.737 14 20.729 14 17.98v-5h8v5z" />
      <Path d="M17 19.98h2v-2h2V16h-2v-2h-2v2h-2v1.98h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
