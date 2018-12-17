import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M7 5a1 1 0 0 0 1-1v-.5C8 2.673 8.673 2 9.5 2s1.5.673 1.5 1.5V10a1 1 0 0 0 2 0V3.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V4a1 1 0 0 0 2 0v-.5C18 1.57 16.43 0 14.5 0c-.979 0-1.864.407-2.5 1.058A3.487 3.487 0 0 0 9.5 0C7.57 0 6 1.57 6 3.5V4a1 1 0 0 0 1 1zM20.963 17.727A1.001 1.001 0 0 0 20 17H4a1.001 1.001 0 0 0-.527 1.851c1.913 1.181 4.822 1.93 7.387 2.107L9 24h6l-1.86-3.042c2.564-.177 5.474-.926 7.387-2.107a1 1 0 0 0 .436-1.124zM15.999 13H8a1 1 0 0 0-.533 1.847C8.639 15.584 10.591 16 12 16s3.36-.416 4.532-1.153A1 1 0 0 0 15.999 13z" />
      <Circle cx={7} cy={7} r={1} />
      <Circle cx={7} cy={10} r={1} />
      <Circle cx={17} cy={10} r={1} />
      <Circle cx={17} cy={7} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
