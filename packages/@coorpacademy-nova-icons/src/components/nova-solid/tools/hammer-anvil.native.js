import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3H2v2h10v3zM9 12H3a1 1 0 0 0-.832 1.555l2 3c.153.23.394.386.668.431L9 17.681V12z" />
      <Path d="M21.371 15.928A1 1 0 0 0 22 15v-3a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v6.382l-3.447 1.725A.995.995 0 0 0 6 21v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2c0-.409-.249-.776-.629-.929L17 18.323v-.646l4.371-1.749z" />
    </G>
  </Svg>
);

export default SvgComponent;
