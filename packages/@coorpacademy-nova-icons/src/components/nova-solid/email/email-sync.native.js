import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 0c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4s4 1.795 4 4c0 2.206-1.795 4-4 4-1.07 0-2.074-.416-2.779-1.119l-.047-.054L17 7h-5v5l1.758-1.757A5.954 5.954 0 0 0 18 12c3.309 0 6-2.691 6-6s-2.691-6-6-6zM8 16.771l3.95-2.821a10.074 10.074 0 0 1-1.937-1.949H2c-.194 0-.378.037-.556.088L8 16.771z" />
      <Path d="M13.816 15.074l-5.235 3.739a.995.995 0 0 1-1.162 0l-7.364-5.26A1.996 1.996 0 0 0 0 14v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-6.201a9.862 9.862 0 0 1-2.184-.725z" />
    </G>
  </Svg>
);

export default SvgComponent;
