import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002h24v24h-24z" />
    <G fill="currentColor">
      <Circle cx={17} cy={20} r={2} />
      <Circle cx={8} cy={20} r={2} />
      <Path d="M9 17.184V12a1 1 0 0 0-1-1H6a1 1 0 0 0-.8.4l-3 4a.997.997 0 0 0-.2.6v3a1 1 0 0 0 1 1h2c0-1.656 1.344-3 3-3 .352 0 .686.073 1 .184zM7 15H4.5L6 13h1v2z" />
      <Path d="M21 4H6.721a1 1 0 0 0-.949.684l-1.333 4A.999.999 0 0 0 5.388 10H10v7.779c.609.549 1 1.336 1 2.221h3a3.001 3.001 0 0 1 6 0h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-6 9h-3v-3h3v3zm5 0h-3v-3h3v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
