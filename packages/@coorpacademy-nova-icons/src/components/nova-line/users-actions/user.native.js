import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12.002 12.006c-2.206 0-4-1.794-4-4 0-2.205 1.794-4 4-4s4 1.795 4 4c0 2.206-1.794 4-4 4zm0-6c-1.103 0-2 .896-2 2 0 1.103.897 2 2 2s2-.897 2-2c0-1.104-.897-2-2-2zM20.002 20.006h-16v-1c0-3.533 3.29-6 8-6s8 2.467 8 6v1zm-13.841-2h11.683c-.598-1.808-2.833-3-5.841-3s-5.244 1.192-5.842 3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
