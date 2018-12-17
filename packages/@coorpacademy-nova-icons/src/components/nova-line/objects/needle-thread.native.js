import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M5 4.998c0 1.655 1.346 3 3 3s3-1.345 3-3c0-.551.449-1 1-1 .385 0 .709.226.877.545l1.248-1.66A2.985 2.985 0 0 0 12 1.998c-1.654 0-3 1.346-3 3 0 .551-.449 1-1 1s-1-.449-1-1c0-1.654-1.346-3-3-3H2v2h2c.551 0 1 .448 1 1zM15.674 10.214L8.051 15.95l8.581-11.409c.76-.713 2.042-.697 2.782.044.378.378.586.88.586 1.414 0 .514-.191.997-.541 1.369L19 7.712v.285c.746 0 1.438.219 2.037.577A3.957 3.957 0 0 0 22 5.999a3.973 3.973 0 0 0-1.172-2.828c-.755-.756-1.76-1.172-2.828-1.172s-2.072.416-2.828 1.172a.932.932 0 0 0-.092.106L2.201 20.399a1 1 0 1 0 1.401 1.4l13.613-10.241a4.01 4.01 0 0 1-1.541-1.344z" />
      <Path d="M19 8.998c-.551 0-1-.449-1-1V7h-2v.998c0 1.655 1.346 3 3 3 .551 0 1 .449 1 1s-.449 1-1 1c-1.654 0-3 1.346-3 3 0 1.655 1.346 3 3 3v-2c-.551 0-1-.449-1-1s.449-1 1-1c1.654 0 3-1.345 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
