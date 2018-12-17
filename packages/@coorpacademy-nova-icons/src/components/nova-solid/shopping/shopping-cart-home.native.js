import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 19.999c-1.104 0-2 .897-2 2 0 1.108.896 2 2 2s2-.892 2-2c0-1.103-.896-2-2-2zM16 19.999c-1.104 0-2 .897-2 2 0 1.108.896 2 2 2s2-.892 2-2c0-1.103-.896-2-2-2zM20 3.999c-.466 0-.87.322-.975.776l-.975 4.224h-2.281C14.859 13.006 11.283 16 7 16a9.086 9.086 0 0 1-1.567-.145l.597 2.386a1 1 0 0 0 .97.757h10a1 1 0 0 0 .975-.775l2.821-12.225H24v-2h-4z" />
      <Path d="M11 11V6.414l1.293 1.292 1.414-1.413-6-6a.999.999 0 0 0-1.414 0l-6 6 1.414 1.413L3 6.414V11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1zm-3-1H6V7h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
