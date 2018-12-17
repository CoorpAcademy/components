import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M22.042 22h-20c-1.103 0-2-.897-2-2V4c0-1.102.897-2 2-2h20c1.103 0 2 .898 2 2v16c0 1.103-.897 2-2 2zm-20-18v16h20.001l-.001-16h-20z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M7.462 16.784l-4.114-2.743 1.387-2.081 1.886 1.257L9.956 7.38l2.171 1.241zM14.042 9h6v2h-6zM14.042 13h6v2h-6z"
    />
  </Svg>
);

export default SvgComponent;
