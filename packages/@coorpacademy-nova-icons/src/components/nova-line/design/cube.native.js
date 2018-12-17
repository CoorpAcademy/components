import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M8.586 3L2 9.586V22h12.414L21 15.414V3H8.586zm.828 2h8.172l-4 4H5.414l4-4zM4 11h9v9H4v-9zm11 7.586v-8.172l4-4v8.172l-4 4z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
