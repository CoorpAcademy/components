import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M23 11.001H13a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1.382l.724-1.447a1 1 0 0 1 .895-.553h4a1 1 0 0 1 .895.553l.724 1.447H23a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zm-9-2h8v-5h-1c-.379 0-.725-.215-.895-.553l-.724-1.447h-2.764l-.724 1.447a.998.998 0 0 1-.893.553h-1v5z"
      fill="currentColor"
    />
    <Path
      d="M18 9.001c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM8 .001v2H5a1 1 0 0 0-1 1v4H2l3 3 3-3H6v-3h2v2l3-3-3-3z"
      fill="currentColor"
    />
    <G fill="currentColor">
      <Path d="M19.633 21.735L18 16.838v-4.837h-2v4H4v-5H2v5.837L.367 21.735c-.186.557-.109 1.129.208 1.57s.837.696 1.425.696h16c.588 0 1.107-.254 1.425-.695s.393-1.014.208-1.571zm-17.245.266l1.333-4H16.28l1.333 4H2.388z" />
      <Path d="M8 19.001h4v2H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
