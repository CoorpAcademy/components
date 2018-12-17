import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23.708 6.293L20 2.586l-3.707 3.707 1.415 1.414L19 6.414V10h2V6.414l1.293 1.293zM13 16v-3a1 1 0 0 0-1-1H7v-1a1 1 0 0 0-1.447-.894l-4 2A.998.998 0 0 0 1 13v6a1 1 0 0 0 1 1h5a1 1 0 0 0 .949-.684L8.721 17H12a1 1 0 0 0 1-1zm-2-1H8a1 1 0 0 0-.949.684L6.28 18H3v-4.381l2-1V13a1 1 0 0 0 1 1h5v1z" />
      <Path d="M12.193 7.192l-.449 1.949A5.473 5.473 0 0 1 16 14.5a5.473 5.473 0 0 1-4.257 5.36l.45 1.949C15.612 21.019 18 18.014 18 14.5s-2.388-6.518-5.807-7.308z" />
    </G>
  </Svg>
);

export default SvgComponent;
