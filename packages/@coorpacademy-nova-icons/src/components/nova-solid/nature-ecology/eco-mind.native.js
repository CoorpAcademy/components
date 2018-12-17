import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M19.997 9.757C19.867 5.458 16.33 2 12 2c-4.411 0-8 3.589-8 8v12h12v-4h3v-3h3.618l-2.621-5.243zm-5.693 4.11a3.715 3.715 0 0 1-4.427 1.665l-.983 1.75-1.308-.734.992-1.767a3.74 3.74 0 0 1-.744-4.642c.935-1.626 5.231-3.67 6.831-4.431.122 1.001.818 6.108-.361 8.159z" />
      <Path d="M9.134 10.888a2.233 2.233 0 0 0 .212 2.525l1-1.78 1.308.734-1.015 1.81c.907.16 1.897-.245 2.366-1.06.521-.904.535-3.299.4-5.127-1.774.919-3.863 2.19-4.271 2.898z" />
    </G>
  </Svg>
);

export default SvgComponent;
