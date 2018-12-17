import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.335 11.066C17.679 8.171 15.091 6.001 12 6.001s-5.679 2.17-6.335 5.065l1.864 1.864c-.014-.143-.029-.284-.029-.429 0-2.482 2.019-4.5 4.5-4.5s4.5 2.018 4.5 4.5c0 .144-.015.286-.029.429l1.864-1.864zM23 14.001l-3-3v2h-2v2h2v2zM4 11.001l-3 3 3 3v-2h2v-2H4zM11 5.001h2v-2h2l-3-3-3 3h2zM13 19.001h-2v2H9l3 3 3-3h-2z" />
      <Path d="M12 10.001a3 3 0 0 0-3 3v5h6v-5a3 3 0 0 0-3-3zm1 4h-2v-1a1 1 0 1 1 2 0v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
