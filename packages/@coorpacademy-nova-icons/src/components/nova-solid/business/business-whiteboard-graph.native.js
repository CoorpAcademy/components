import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.585 17l-4.999 4.999h2.828L11 17.414v4.585h2v-4.585l4.586 4.585h2.828L15.415 17zM20 2H4c-1.103 0-2 .897-2 2v10c0 1.102.897 2 2 2h16c1.104 0 2-.898 2-2V4c0-1.103-.896-2-2-2zm0 5.415l-4.293 4.292c-.195.196-.451.293-.707.293s-.512-.097-.707-.293L13 10.415l-1.293 1.292a.997.997 0 0 1-1.414 0L8 9.415l-1.293 1.292A1.002 1.002 0 0 1 6 11H4V9h1.586l1.707-1.707a1 1 0 0 1 1.414 0L11 9.586l1.293-1.293a1 1 0 0 1 1.414 0L15 9.586l5-4.999v2.828z" />
    </G>
  </Svg>
);

export default SvgComponent;
