import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M10.5 7l-5.501 4H7v4h2v-2h3v2h2v-4h2z" />
      <Path d="M22.414 20.586l-3.959-3.959A9.483 9.483 0 0 0 10.486 2 9.481 9.481 0 0 0 1 11.486a9.482 9.482 0 0 0 9.486 9.486 9.412 9.412 0 0 0 5.14-1.517l3.958 3.958a1.994 1.994 0 0 0 2.829.001c.78-.78.78-2.049.001-2.828zM3 11.486a7.481 7.481 0 0 1 7.486-7.485 7.482 7.482 0 0 1 7.486 7.485 7.43 7.43 0 0 1-2.194 5.292 7.431 7.431 0 0 1-5.293 2.193A7.482 7.482 0 0 1 3 11.486z" />
    </G>
  </Svg>
);

export default SvgComponent;
