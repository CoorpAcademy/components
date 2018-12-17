import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.414 4.001l1.293-1.293-1.414-1.414L7 2.587 4.879.466a.999.999 0 0 0-1.414 0A4.968 4.968 0 0 0 2 4.001c0 1.025.313 2 .881 2.824L.2 10.402a.997.997 0 0 0-.095 1.047c.17.338.516.553.895.553h5a1.001 1.001 0 0 0 .895-1.448L6.072 8.91a4.966 4.966 0 0 0 4.463-1.371.997.997 0 0 0 0-1.414L8.414 4.001zM4.879 6.122a3.008 3.008 0 0 1-.588-3.416L8.293 6.71c-1.102.526-2.525.3-3.414-.588zM23 12.001H13a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4v1h-3v2h8v-2h-3v-1h4a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 2v4h-8v-4h8zM17 10.001h2v-6a1 1 0 0 0-1-1h-6v2h5v5zM5 14.001H3v6a1 1 0 0 0 1 1h6v-2H5v-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
