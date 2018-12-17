import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M21 6h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 4h4v2h-4V4zm10 14H4V8h16v10z" />
      <Path d="M13.184 12h-2.367c-.415-1.162-1.513-2-2.817-2s-2.402.838-2.816 2H8v2H5.184c.413 1.163 1.511 2 2.816 2s2.404-.836 2.816-2h2.367c.413 1.164 1.512 2 2.816 2s2.404-.836 2.816-2H16v-2h2.816c-.414-1.162-1.513-2-2.816-2s-2.402.838-2.816 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
