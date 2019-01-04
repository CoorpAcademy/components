import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill={props.color}
      d="M18 2.001H6c-1.103 0-2 .898-2 2v12c0 .322.156.626.419.814l7 5a1 1 0 0 0 1.162 0l7-5c.263-.188.419-.492.419-.814v-12c0-1.103-.896-2-2-2zm-3 14l-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2 1 3zm3-10H6v-2h12v2z"
    />
  </Svg>
);

export default SvgComponent;
