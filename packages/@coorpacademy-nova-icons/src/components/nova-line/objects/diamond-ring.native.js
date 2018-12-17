import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M16.035 9.29l-1.271 1.548A5 5 0 0 1 17 15c0 2.758-2.243 5.001-5 5.001S7 17.758 7 15a5 5 0 0 1 2.236-4.162L7.965 9.29A6.991 6.991 0 0 0 5 15c0 3.86 3.141 7.001 7 7.001S19 18.86 19 15a6.991 6.991 0 0 0-2.965-5.71z" />
      <Path d="M11.219 10.625a1 1 0 0 0 1.562 0l4-5a1 1 0 0 0-.074-1.332l-2-2A1 1 0 0 0 14 2h-4a1 1 0 0 0-.707.293l-2 2a1 1 0 0 0-.074 1.332l4 5zM10.414 4h3.172l1.074 1.075L12 8.399 9.34 5.075 10.414 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
