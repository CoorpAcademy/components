import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24V24h-24z" />
    <G fill="currentColor">
      <Path d="M21 9V3.001a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-2-4.999V9h-1.813A6.504 6.504 0 0 0 17 8.691v-4.69h2zM20 14h-2.35c.223-.626.35-1.298.35-2 0-.341-.035-.673-.09-1H20v3zM4 14v-3h2.09c-.055.327-.09.659-.09 1 0 .702.127 1.374.35 2H4zm4-2c0-2.205 1.795-3.999 4-3.999S16 9.795 16 12c0 2.206-1.795 4-4 4s-4-1.794-4-4zm5-5.909v-2.09h2v2.812a5.937 5.937 0 0 0-2-.722zm0 11.819a5.935 5.935 0 0 0 2-.721V20h-2v-2.09zM11 4.001v2.09a5.937 5.937 0 0 0-2 .722V4.001h2zm-6 0h2v4.69A6.504 6.504 0 0 0 6.813 9H5V4.001zM5 16h2v4H5v-4zm4 4v-2.812a5.935 5.935 0 0 0 2 .721V20H9zm10 0h-2v-4h2v4z" />
      <Path d="M14 11h-1V9h-2v4h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
