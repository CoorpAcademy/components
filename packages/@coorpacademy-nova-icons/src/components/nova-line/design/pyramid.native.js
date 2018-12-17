import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 2.15L1.528 18.44 12 23.095l10.472-4.654L12 2.15zm1 5.255l6.528 10.154L13 20.462V7.405zm-2 0v13.057L4.472 17.56 11 7.405z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
