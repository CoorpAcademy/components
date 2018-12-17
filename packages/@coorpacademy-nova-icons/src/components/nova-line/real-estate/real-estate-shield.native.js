import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h2v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8h2a1 1 0 0 0 .707-1.707zM18 12a1 1 0 0 0-1 1v8H7v-8a1 1 0 0 0-1-1h-.586L12 5.415 18.586 12H18z" />
      <Path d="M8 15c0 2.464 3.093 4.597 3.445 4.832l.555.37.555-.371C12.907 19.597 16 17.464 16 15v-3H8v3zm2-1h4v1c0 .891-1.129 2.05-2.001 2.756C11.127 17.052 10 15.896 10 15v-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
