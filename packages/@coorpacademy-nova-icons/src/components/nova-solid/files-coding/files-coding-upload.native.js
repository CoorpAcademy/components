import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.252 17.175l-.545.544-1.414-1.414 2.293-2.293-2.293-2.293 1.414-1.414 3.106 3.106a6.947 6.947 0 0 1 3.188-1.321V4.595L13.415.009H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h10.682A6.974 6.974 0 0 1 12 19.01c0-.636.092-1.249.252-1.835zM12 1.009l5 5h-5v-5zM7.707 16.305l-1.414 1.414-3.707-3.707 3.707-3.707 1.414 1.414-2.293 2.293 2.293 2.293zM19 14.595l-4.707 4.707 1.414 1.413L18 18.423v5.587h2v-5.587l2.293 2.292 1.414-1.413z" />
    </G>
  </Svg>
);

export default SvgComponent;
