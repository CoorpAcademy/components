import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M10.002 17.006c0-2.305-1.576-4.231-3.702-4.808a2.994 2.994 0 0 0 1.702-2.692c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.188.699 2.207 1.702 2.692-2.126.576-3.702 2.503-3.702 4.808v2a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1v-2zm-5-8.5c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .45-1 1-1zm3 9.5h-1a1 1 0 0 0-1 1v3h-2v-3a1 1 0 0 0-1-1h-1v-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1zM15.756 18.429a2.99 2.99 0 0 0 1.246-2.423h-2c0 .551-.449 1-1 1s-1-.449-1-1h-2a2.99 2.99 0 0 0 1.246 2.423c-1.324.652-2.246 2.004-2.246 3.577v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1c0-1.573-.921-2.925-2.246-3.577zm-3.754 3.577a2 2 0 0 1 4 0h-4zM17.002 14.006c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M20.002 8.006h-4v-5h2v3h2z" />
  </Svg>
);

export default SvgComponent;
