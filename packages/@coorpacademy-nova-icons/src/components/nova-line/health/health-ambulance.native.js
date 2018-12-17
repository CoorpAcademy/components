import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M20 6h-6a2 2 0 0 0-4 0c-1.104 0-2 .898-2 2v1H6a1 1 0 0 0-.707.293l-3 3A.997.997 0 0 0 2 13v6a1 1 0 0 0 1 1h2.185c.414 1.162 1.513 2 2.815 2s2.401-.838 2.816-2h3.368c.414 1.162 1.514 2 2.815 2s2.401-.838 2.816-2H21a1 1 0 0 0 1-1V8c0-1.102-.896-2-2-2zm0 2v10h-.184c-.415-1.162-1.515-2-2.816-2s-2.401.838-2.815 2h-3.368a2.99 2.99 0 0 0-.816-1.219V8H20zM4 13.415L6.414 11H8v5a2.993 2.993 0 0 0-2.815 2H4v-4.585zM8 20a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm9 0a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z" />
      <Path d="M14 15h2v-2h2v-2h-2V9h-2v2h-2v2h2zM5 13h2v2H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
