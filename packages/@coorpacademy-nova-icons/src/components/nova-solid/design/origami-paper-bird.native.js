import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M4 6V2L0 6zM24 8H13l-.01-.012L6 14.979V15l5.511 5.511zM8 2H6v10.151l5.705-5.705zM12.925 21.925L13 22h10l-6.247-3.904z" />
    </G>
  </Svg>
);

export default SvgComponent;
