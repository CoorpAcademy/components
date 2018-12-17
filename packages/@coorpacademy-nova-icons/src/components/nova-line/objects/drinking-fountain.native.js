import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M20 11a1 1 0 0 0-1-1h-8V5a1.001 1.001 0 0 1 2 0v1h2V5c0-1.654-1.346-3-3-3S9 3.346 9 5v5H5a1 1 0 0 0-1 1c0 3.055 1.738 5.436 4.808 6.646l-.778 3.111a1 1 0 0 0 .183.857A.991.991 0 0 0 9 22h6a1.002 1.002 0 0 0 .971-1.242l-.778-3.111C18.262 16.436 20 14.055 20 11zm-6.285 5.041a1.004 1.004 0 0 0-.686 1.203l.69 2.756h-3.438l.689-2.757a1.004 1.004 0 0 0-.686-1.203c-1.731-.513-3.757-1.627-4.196-4.04h11.824c-.439 2.413-2.465 3.527-4.197 4.041z" />
      <Circle cx={14} cy={8} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
