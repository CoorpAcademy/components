import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.001h-24z" />
    <Path
      d="M18 20.999v-19a1 1 0 0 0-1-1c-5.86 0-11 6.076-11 13v7H2v2h20v-2h-4zm-10 0v-5h6v-2H8c0-.688.061-1.354.167-2H14v-2H8.673c.247-.709.558-1.376.916-2H14v-2h-2.964C12.466 4.422 14.24 3.376 16 3.083v17.916H8z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
