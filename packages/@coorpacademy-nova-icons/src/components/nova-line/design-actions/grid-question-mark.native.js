import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 20.277V13h-7.277a2.012 2.012 0 0 0-.723-.723V5H3.723A1.994 1.994 0 1 0 1 7.723v12.554c-.595.347-1 .986-1 1.723a1.994 1.994 0 1 0 3.723 1h12.555c.347.595.984 1 1.723 1a2 2 0 0 0 2-2A1.998 1.998 0 0 0 19 20.277zM9 21H3.723A2.012 2.012 0 0 0 3 20.277V15h5.277c.175.3.423.548.723.723V21zm0-8.723c-.3.176-.548.423-.723.723H3V7.723c.3-.175.548-.423.723-.723H9v5.277zM16.277 21H11v-5.277c.3-.175.548-.423.723-.723h5.278v5.277c-.3.174-.549.422-.724.723zM18 0c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2h-1v3h2V7.874A4.01 4.01 0 0 0 22 4c0-2.206-1.794-4-4-4z" />
      <Circle cx={18} cy={11} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
