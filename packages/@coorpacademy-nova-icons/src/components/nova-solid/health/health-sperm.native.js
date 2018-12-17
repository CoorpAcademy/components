import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002 0h24.001v24.001H-.002z" />
    <G fill="currentColor">
      <Path d="M17 3c-2.692 0-4.879 1.715-4.981 3.849C11.865 6.911 11.557 7 11 7c-.221 0-.279 0-.551-.816C10.194 5.42 9.721 4 8 4S5.806 5.42 5.551 6.184C5.279 7 5.221 7 5 7c-.805 0-.988-.55-1-1H2c0 1.206.799 3 3 3 1.721 0 2.194-1.42 2.449-2.184C7.721 6 7.779 6 8 6c.221 0 .279 0 .551.816C8.806 7.58 9.279 9 11 9c.642 0 1.14-.093 1.536-.234C13.354 10.084 15.039 11 17 11c2.757 0 5-1.794 5-4s-2.243-4-5-4zM15 15c-1.771 0-3.223.827-3.763 2-.179 0-.247-.16-.362-.323C10.432 16.051 9.689 15 8 15c-1.721 0-2.194 1.42-2.449 2.184C5.279 18 5.221 18 5 18c-.805 0-.988-.55-1-1H2c0 1.206.799 3 3 3 1.721 0 2.194-1.42 2.449-2.184C7.721 17 7.779 17 8 17c.626 0 .845.27 1.242.831.612.867 1.013 1.169 1.995 1.169.54 1.173 1.992 2 3.763 2 2.243 0 4-1.318 4-3s-1.757-3-4-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
