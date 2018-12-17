import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 11h3v2h-3zM19.07 3.515l1.414 1.414-2.12 2.12-1.414-1.413zM4.929 3.516l2.12 2.12-1.412 1.413-2.122-2.12zM1 11h3v2H1zM4.928 20.485l-1.414-1.414 2.122-2.121 1.414 1.414zM19.071 20.485l-2.12-2.12 1.413-1.415 2.122 2.121zM15 5c0-1.654-1.346-3-3-3S9 3.346 9 5s1.346 3 3 3 3-1.346 3-3zm-3 1c-.551 0-1-.449-1-1 0-.551.449-1 1-1s1 .449 1 1c0 .551-.449 1-1 1zM17 13c0-2.757-2.243-5-5-5s-5 2.243-5 5v3a1 1 0 0 0 1 1h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-3zm-2 2h-1a1 1 0 0 0-1 1v4h-2v-4a1 1 0 0 0-1-1H9v-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
