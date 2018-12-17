import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23.998 4.286h-4.286L17.998 0l-1.715 4.286h-4.285l3.708 3.13L13.712 12l4.286-2.834L22.283 12 20.29 7.416zM8.998 18.5a1.5 1.5 0 0 0 3 0v-5.306a.753.753 0 0 0-.983-.712l-5 1.63a.75.75 0 0 0-.518.713V18a1.5 1.5 0 1 0 1.501 1.5v-4.131l3.5-1.141V17a1.5 1.5 0 0 0-1.5 1.5z" />
      <Path d="M13.998 22h-12V11h10V9h-10c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9h-2v9z" />
    </G>
  </Svg>
);

export default SvgComponent;
