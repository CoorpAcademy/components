import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3.94 14.001A9.054 9.054 0 0 0 8 18.052v-4.051H3.94zM10 6.001h4V1.232c-.644-.146-1.312-.23-2-.23s-1.356.084-2 .23v4.769zM16 6.001h4.051A9.049 9.049 0 0 0 16 1.95v4.051zM3.232 8.001a8.964 8.964 0 0 0-.232 2c0 .688.086 1.355.233 2H8v-4H3.232zM8 6.001V1.95a9.049 9.049 0 0 0-4.051 4.051H8zM10 8.001h4v4h-4zM20.06 14.001H16v4.051a9.058 9.058 0 0 0 4.06-4.051zM16 8.001v4h4.767a8.92 8.92 0 0 0 .233-2c0-.69-.085-1.356-.232-2H16z" />
      <Path d="M13 18.941a9.16 9.16 0 0 0 1-.175V14h-4v4.766c.328.074.66.137 1 .175v2.06H4v2h16v-2h-7v-2.06z" />
    </G>
  </Svg>
);

export default SvgComponent;
