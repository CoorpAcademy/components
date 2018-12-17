import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.998 13.001A6.999 6.999 0 0 1 12 6.047c-.33-.03-.664-.046-1.002-.046-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.572 4.836l-2.572 4.164h11c5.514 0 10-4.037 10-9 0-.765-.118-1.503-.318-2.212a6.957 6.957 0 0 1-1.682.212zM13.513 5.829l8.485-2.828-2.829 8.484-1.414-4.242z" />
    </G>
  </Svg>
);

export default SvgComponent;
