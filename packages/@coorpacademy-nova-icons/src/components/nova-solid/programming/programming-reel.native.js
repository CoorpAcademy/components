import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.485-10-10-10zm0 3c1.875 0 3.637.73 4.963 2.056L15.549 8.47C14.602 7.522 13.341 7 12 7s-2.601.522-3.548 1.47L7.038 7.056A6.968 6.968 0 0 1 12 5zm-1.81 13.777c-3.067-.822-5.209-3.601-5.209-6.758 0-.571.083-1.146.262-1.811l1.932.519a4.912 4.912 0 0 0-.193 1.292c0 2.253 1.533 4.239 3.727 4.826l-.519 1.932zM10 12a2 2 0 1 1 4.001.001A2 2 0 0 1 10 12zm3.811 6.777l-.517-1.932c2.194-.587 3.727-2.573 3.727-4.826 0-.391-.062-.801-.193-1.292l1.932-.519c.179.665.262 1.24.262 1.811-.002 3.158-2.144 5.936-5.211 6.758z"
    />
  </Svg>
);

export default SvgComponent;
