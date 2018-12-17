import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 .001c-1.594 0-3.07.837-4 2.08C8.07.838 6.594.001 5 .001c-2.757 0-5 2.243-5 5 0 5.491 8.124 10.632 8.471 10.848a.998.998 0 0 0 1.058 0C9.876 15.633 18 10.492 18 5.001c0-2.757-2.243-5-5-5zM22.293 17.293L20 19.586V14h-2v5.586l-2.293-2.293-1.414 1.414L19 23.414l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
