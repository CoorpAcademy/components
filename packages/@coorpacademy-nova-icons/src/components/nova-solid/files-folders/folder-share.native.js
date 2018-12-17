import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-10 7c0 .053-.012.102-.016.154l2.701 1.35c.352-.31.809-.504 1.315-.504a2 2 0 1 1-2 2c0-.053.012-.102.016-.153l-2.701-1.351C8.963 15.806 8.506 16 8 16a2 2 0 0 1 0-4c.506 0 .963.194 1.315.504l2.701-1.35C12.012 11.102 12 11.053 12 11a2 2 0 1 1 2 2c-.506 0-.963-.194-1.315-.504l-2.701 1.351c.004.051.016.1.016.153z"
    />
  </Svg>
);

export default SvgComponent;
