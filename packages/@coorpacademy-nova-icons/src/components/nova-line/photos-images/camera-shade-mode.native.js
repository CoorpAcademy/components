import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 10.998c2.206 0 4-1.793 4-4 0-2.205-1.794-4-4-4s-4 1.795-4 4c0 2.206 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2 0 1.104-.897 2-2 2s-2-.896-2-2c0-1.103.897-2 2-2zM14.924 14.381a.998.998 0 0 0-.217-1.089l-6-6a.997.997 0 0 0-1.414 0l-6 6A.998.998 0 0 0 2 14.998h2v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5h2a1 1 0 0 0 .924-.617zM11 12.998c-.552 0-1 .449-1 1v5H6v-5c0-.551-.448-1-1-1h-.586L8 9.412l3.586 3.585H11zM21.293 18.292l-2.707 2.706h2.828l1.293-1.293zM18.293 15.292l-5.707 5.706h2.828l4.293-4.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
