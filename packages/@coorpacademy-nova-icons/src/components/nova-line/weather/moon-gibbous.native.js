import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12.717 2.049L12.5 2l-.217.049C7.561 3.098 4 7.387 4 12.024c0 4.639 3.561 8.927 8.283 9.977l.217.048.217-.048C17.439 20.951 21 16.663 21 12.024c0-4.637-3.561-8.926-8.283-9.975zM12.5 19.998c-3.721-.932-6.5-4.32-6.5-7.974 0-3.652 2.779-7.042 6.5-7.972 3.721.93 6.5 4.32 6.5 7.972 0 3.654-2.779 7.042-6.5 7.974z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
