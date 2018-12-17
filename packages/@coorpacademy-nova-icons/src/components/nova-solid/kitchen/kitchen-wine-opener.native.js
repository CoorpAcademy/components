import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <G fill="currentColor">
      <Path d="M10.293 9.293a.998.998 0 0 0 0 1.413l.793.793-1.5 1.5H7a1.001 1.001 0 0 0-.895 1.448L7.382 17H6c-.266 0-.519.106-.707.293l-3 3 1.414 1.413L6.414 19H9a1.003 1.003 0 0 0 .895-1.448L8.618 15H10c.266 0 .519-.106.707-.293l1.793-1.792.793.792a.997.997 0 0 0 1.414 0l1.5-1.5-4.414-4.413-1.5 1.499zM21.122 7.293l-4.415-4.414c-1.134-1.134-3.109-1.135-4.244 0a3.004 3.004 0 0 0 .002 4.242l4.414 4.414c.566.566 1.32.879 2.121.879a3.003 3.003 0 0 0 2.122-5.121z" />
    </G>
  </Svg>
);

export default SvgComponent;
