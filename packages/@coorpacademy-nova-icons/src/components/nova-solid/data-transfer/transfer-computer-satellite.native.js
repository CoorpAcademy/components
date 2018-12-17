import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.414 4.002l1.293-1.293-1.414-1.415L7 2.587 4.879.466a.999.999 0 0 0-1.414 0A4.965 4.965 0 0 0 2 4.002c0 1.025.312 2 .881 2.824L.2 10.402a.997.997 0 0 0-.095 1.047c.17.338.516.553.895.553h5a1.001 1.001 0 0 0 .895-1.448L6.072 8.91a4.962 4.962 0 0 0 4.463-1.371.997.997 0 0 0 0-1.414L8.414 4.002zM23 12.002H13a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4v1h-3v2h8v-2h-3v-1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 2v4h-8v-4h8zM17 10.002h2v-6a1 1 0 0 0-1-1h-6v2h5v5zM5 14.002H3v6a1 1 0 0 0 1 1h6v-2H5v-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
