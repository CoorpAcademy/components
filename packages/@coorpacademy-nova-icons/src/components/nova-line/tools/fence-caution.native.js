import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.001H0z" />
    <Path
      d="M21 7h-2v-.185A2.993 2.993 0 0 0 21 4c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.838 2.403 2 2.815V7H7v-.185A2.993 2.993 0 0 0 9 4c0-1.654-1.346-3-3-3S3 2.345 3 4c0 1.302.838 2.403 2 2.815V7H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v7h2v-7h12v7h2v-7h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-5.586 2h3.172l-4 4h-3.172l4-4zm-6.828 4H5.414l4-4h3.172l-4 4zM18 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm.586 6L4 11.586V9h2.586zm10.828 4L20 10.414V13h-2.586z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
