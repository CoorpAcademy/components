import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M20 2H4c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zM9 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM4 20V6h16l.001 14H4z" />
      <Path d="M13.488 11.926c.164.044.334.074.512.074a2 2 0 1 0-2-2c0 .178.031.348.074.512l-3.563 3.563A1.953 1.953 0 0 0 8 14a2 2 0 1 0 2 2c0-.177-.031-.347-.074-.512l3.562-3.562zM13 15h5v3h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
