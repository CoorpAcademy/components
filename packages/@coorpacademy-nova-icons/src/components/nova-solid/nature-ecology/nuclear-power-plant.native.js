import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2a1.99 1.99 0 0 0-1.383.56C19.106 1.635 18.132 1 17 1s-2.106.635-2.617 1.56A1.99 1.99 0 0 0 13 2a2 2 0 0 0 0 4 1.99 1.99 0 0 0 1.383-.56C14.894 6.365 15.868 7 17 7s2.106-.635 2.617-1.56c.359.345.845.56 1.383.56a2 2 0 0 0 0-4zM17.237 9.664A1 1 0 0 0 16.295 9h-8.59a1 1 0 0 0-.942.664l-4.285 12A1.001 1.001 0 0 0 3.419 23h17.162a.999.999 0 0 0 .941-1.336l-4.285-12zM12 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2.29-3.45l1.15 2.29c-.79.4-1.341 1.21-1.341 2.16H7c0-1.93 1.1-3.609 2.71-4.45zM12 21c-1.14 0-2.19-.38-3.03-1.029l1.58-2.101c.41.31.9.5 1.45.5s1.04-.19 1.45-.5l1.58 2.11C14.19 20.62 13.14 21 12 21zm2.37-5c0-.95-.55-1.76-1.351-2.16l1.171-2.33A5.001 5.001 0 0 1 17 16h-2.63z" />
    </G>
  </Svg>
);

export default SvgComponent;
