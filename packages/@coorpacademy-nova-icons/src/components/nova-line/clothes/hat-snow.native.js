import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24H.001z" />
    <Path
      d="M17.886 5.09A4.001 4.001 0 0 0 14 2H9C5.691 2 3 4.691 3 8v6a1 1 0 0 0 .684.949L6 15.721V18c0 2.205 1.795 4 4 4s4-1.795 4-4v-4h4v4c0 1.103-.896 2-2 2a1.99 1.99 0 0 1-1-.277v2.135c.321.084.652.142 1 .142 2.205 0 4-1.795 4-4v-4.185A2.993 2.993 0 0 0 22 11v-1c0-2.453-1.779-4.489-4.114-4.91zM9 4h5c.802 0 1.49.478 1.809 1.159C13.628 5.697 12 7.656 12 10H5V8c0-2.205 1.795-4 4-4zm3 14c0 1.103-.896 2-2 2s-2-.897-2-2v-3a1 1 0 0 0-.684-.949L5 13.279V12h4v2h2v-2h1v6zm8-7c0 .551-.449 1-1 1h-5v-2c0-1.654 1.346-3 3-3s3 1.346 3 3v1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
