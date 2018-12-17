import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M12 0C8.691 0 6 2.691 6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4h-1c-2.757 0-5 2.243-5 5v9h12V6c0-3.309-2.691-6-6-6zm4 22H8v-7c0-1.654 1.346-3 3-3h1a5.98 5.98 0 0 0 4-1.531V22z" />
      <Path d="M8.75 17.5c0 1.792 1.458 3.25 3.25 3.25s3.25-1.458 3.25-3.25-1.458-3.25-3.25-3.25-3.25 1.458-3.25 3.25zM12 15.75c.293 0 .564.079.808.207l-2.522 1.893A1.75 1.75 0 0 1 12 15.75zm0 3.5c-.293 0-.564-.079-.808-.207l2.522-1.892A1.75 1.75 0 0 1 12 19.25z" />
    </G>
  </Svg>
);

export default SvgComponent;
