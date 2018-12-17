import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22.995 14.976a.968.968 0 0 0-.064-.317c-.074-.2-5.951-10.951-6.053-11.138A1 1 0 0 0 16 3H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7.42l2.857 5H11v-3a1 1 0 0 0-1-1H7c-2.206 0-4 1.794-4 4v6a1 1 0 0 0 1 1h2.185c.414 1.162 1.513 2 2.815 2s2.401-.838 2.816-2h3.369c.414 1.162 1.514 2 2.815 2s2.401-.838 2.816-2H22a1 1 0 0 0 1-1v-5c0-.009-.004-.016-.005-.024zm-9.127-7.472A.999.999 0 0 0 13 7H6V5h9.406l4.909 9H17.58l-3.712-6.496zM5 14c0-1.104.897-2 2-2h2v5a2.993 2.993 0 0 0-2.815 2H5v-5zm4 7c-.551 0-1-.449-1-1 0-.551.449-1 1-1s1 .449 1 1c0 .551-.449 1-1 1zm9 0c-.551 0-1-.449-1-1 0-.551.449-1 1-1s1 .449 1 1c0 .551-.449 1-1 1zm2.816-2c-.415-1.162-1.514-2-2.816-2s-2.401.838-2.815 2h-3.369A2.981 2.981 0 0 0 11 17.781V16h10v3h-.184z" />
      <Path d="M6 13h2v2H6z" />
    </G>
  </Svg>
);

export default SvgComponent;
