import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.371 15.928A1 1 0 0 0 22 15v-3a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1H3a1 1 0 0 0-.832 1.555l2 3c.153.23.395.386.668.431l5.164.861v.535l-3.447 1.725A.995.995 0 0 0 6 21v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2c0-.409-.249-.776-.629-.929L17 18.323v-.646l4.371-1.749zm-15.779-.844L4.869 14H10v1.819l-4.408-.735zm10.037 4.844L20 21.677V22H8v-.38l3.447-1.726A1 1 0 0 0 12 19v-6h8v1.323l-4.371 1.748A1 1 0 0 0 15 17v2a1 1 0 0 0 .629.928zM12 9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3H2v2h10v3zm2-7h3v6h-3V2z" />
    </G>
  </Svg>
);

export default SvgComponent;
