import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 2.371L3.733 13 12 23.629 20.267 13 12 2.371zM7.045 12l3.014-3.876L9.198 12H7.045zm5.708 2l-1.269 5.709L7.045 14h5.708zm2.049 0h2.153l-3.014 3.876.861-3.876zm-3.555-2l1.269-5.709L16.955 12h-5.708z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
