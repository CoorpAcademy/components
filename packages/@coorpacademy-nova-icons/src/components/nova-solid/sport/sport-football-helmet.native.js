import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <Path
      fill="currentColor"
      d="M22.851 16.475A1 1 0 0 0 22 16H12v-2l8.231-1.646c.521-.105.98-.412 1.274-.855.294-.441.4-.985.294-1.505C20.869 5.432 16.835 2 12 2 6.477 2 2 6.477 2 12c0 4.66 3.187 8.575 7.5 9.685a2.005 2.005 0 0 0 1.725-.356 1.99 1.99 0 0 0 .602-.787l1.549 1.239A.997.997 0 0 0 14 22h6c.379 0 .725-.214.895-.553l2-4c.154-.31.138-.678-.044-.972zM8.5 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5.882 1.5h-.031L12 18.119V18h3.382l-1 2zm5 0h-2.764l1-2h2.764l-1 2z"
    />
  </Svg>
);

export default SvgComponent;
