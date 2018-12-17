import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 5.999c1.654 0 3-1.346 3-3s-1.346-3-3-3S9 1.346 9 3a3.003 3.003 0 0 0 3 2.999zM8 15h1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h1a1 1 0 0 0 1-1v-2c0-2.756-2.243-5-5-5s-5 2.244-5 5v2a1 1 0 0 0 1 1z" />
      <Path d="M18.34 16.823l-.578 1.914C19.611 19.296 20 19.903 20 20c0 .514-2.75 2-8 2s-8-1.486-8-2c0-.102.417-.738 2.396-1.31l-.555-1.921C2.667 17.685 2 19.031 2 20c0 2.748 5.184 4 10 4s10-1.252 10-4c0-.945-.635-2.264-3.66-3.177z" />
    </G>
  </Svg>
);

export default SvgComponent;
