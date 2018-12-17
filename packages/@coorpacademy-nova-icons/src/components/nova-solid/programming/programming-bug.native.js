import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 9h8a1 1 0 0 0 1-1 4.983 4.983 0 0 0-1.453-3.518l1.285-1.928-1.664-1.109-1.286 1.928A4.989 4.989 0 0 0 12 3c-.666 0-1.3.137-1.882.374L8.833 1.445l-1.665 1.11 1.285 1.928A4.982 4.982 0 0 0 7.001 8 1 1 0 0 0 8 9zM17 15h4v-2h-4v-1.18l4.196-.84-.393-1.961-4.901.981H8.099l-4.902-.981-.393 1.961L7 11.82V13H3v2h4v1.181l-4.196.839.393 1.961 4.476-.895 3.621 3.622a1 1 0 0 0 1.413 0l3.622-3.622 4.475.895.393-1.961L17 16.181V15z" />
    </G>
  </Svg>
);

export default SvgComponent;
