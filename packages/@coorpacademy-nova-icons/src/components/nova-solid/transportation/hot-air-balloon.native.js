import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M20 9.5c0-3.334-2.322-6.156-5.532-7.132.846 1.785 1.282 4.465 1.282 7.132 0 1.239-.098 2.477-.284 3.631L12.604 20h-1.208l-2.862-6.869A23.053 23.053 0 0 1 8.25 9.5c0-2.667.436-5.347 1.282-7.132C6.322 3.344 4 6.166 4 9.5c0 2.818 1.668 5.256 4.12 6.537L9.771 20H9l1 3h4l1-3h-.771l1.651-3.963C18.331 14.756 20 12.318 20 9.5z" />
      <Path d="M12 17c.161 0 .318-.014.477-.022.78-.804 1.773-3.378 1.773-7.478s-.993-6.673-1.773-7.477C12.318 2.014 12.161 2 12 2s-.318.014-.477.023C10.743 2.827 9.75 5.4 9.75 9.5s.993 6.674 1.773 7.478c.159.008.316.022.477.022z" />
    </G>
  </Svg>
);

export default SvgComponent;
