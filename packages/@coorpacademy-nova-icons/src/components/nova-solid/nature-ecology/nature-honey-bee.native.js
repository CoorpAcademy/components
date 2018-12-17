import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <G fill="currentColor">
      <Path d="M20.941 14A3.485 3.485 0 0 0 22 11.5C22 9.57 20.43 8 18.5 8H17v2h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H17v2h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H17v2h1.5c1.93 0 3.5-1.57 3.5-3.5 0-.979-.407-1.864-1.059-2.5zM2 11.5c0 .979.407 1.863 1.059 2.5A3.484 3.484 0 0 0 2 16.5C2 18.43 3.57 20 5.5 20H7v-2H5.5c-.827 0-1.5-.673-1.5-1.5S4.673 15 5.5 15H7v-2H5.5c-.827 0-1.5-.673-1.5-1.5S4.673 10 5.5 10H7V8H5.5C3.57 8 2 9.57 2 11.5zM15.168 3.445l-1.861 2.792C12.895 6.094 12.46 6 12 6s-.895.094-1.307.237L8.832 3.445a1 1 0 1 0-1.664 1.11l1.861 2.792A3.965 3.965 0 0 0 8 10v8c0 2.205 1.794 4 4 4s4-1.795 4-4v-8a3.965 3.965 0 0 0-1.029-2.653l1.861-2.792a1.001 1.001 0 0 0-1.664-1.11zM14 18h-4v-2h4v2zm0-5h-4v-2h4v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
