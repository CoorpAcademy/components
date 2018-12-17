import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={17} cy={17} r={1.25} />
      <Path d="M21.735 13.326l-2.344 2.344c.103.183.183.376.241.581h3.315a5.942 5.942 0 0 0-1.212-2.925z" />
      <Path d="M19.633 17.75a2.745 2.745 0 0 1-2.633 2A2.752 2.752 0 0 1 14.25 17 2.752 2.752 0 0 1 17 14.25c.485 0 .935.137 1.331.358l2.344-2.343A5.97 5.97 0 0 0 17 11a6 6 0 0 0 0 12c3.06 0 5.578-2.29 5.948-5.25h-3.315zM4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20z" />
      <Path d="M6 20h3.587A7.96 7.96 0 0 1 9 17a8 8 0 0 1 8-8c.34 0 .672.028 1 .069V1a1 1 0 0 0-1-1H6v20z" />
    </G>
  </Svg>
);

export default SvgComponent;
