import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 16 16" {...props}>
    <Path
      d="M.1 2.5c0-.2.2-.3.4-.2L7.2 7V2.5c0-.2.2-.3.4-.2l7.8 5.5c.1.1.1.3 0 .4l-7.8 5.5c-.1.1-.4 0-.4-.2V9L.5 13.8c-.1.1-.4 0-.4-.2V2.5z"
      fill="#515161"
    />
  </Svg>
);

export default SvgComponent;
