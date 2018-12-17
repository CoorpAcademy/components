import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.081 15.548a.771.771 0 0 0-.771.77v1.54a.771.771 0 0 0 1.541 0v-1.54a.77.77 0 0 0-.77-.77z" />
      <Path d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM9 20.007H7.5v-2.25H6v2.25H4.5v-6H6v2.25h1.5v-2.25H9v6zm4.848.708l-.776-.776c-.301.143-.634.23-.99.23a2.312 2.312 0 0 1-2.311-2.31v-1.54a2.314 2.314 0 0 1 2.311-2.312 2.314 2.314 0 0 1 2.311 2.312v1.54c0 .356-.088.69-.232.991l.776.776-1.089 1.089zm5.652-.708h-1.688l-.562-1.199-.562 1.199H15l1.406-3-1.406-3h1.688l.562 1.201.562-1.201H19.5l-1.406 3 1.406 3zm-4.5-13v-5l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
