import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM9 15.507H6.75a.75.75 0 0 0-.75.75v1.5c0 .413.336.75.75.75H9v1.5H6.75a2.253 2.253 0 0 1-2.25-2.25v-1.5c0-1.241 1.01-2.25 2.25-2.25H9v1.5zm5.25 2.25h-1.5v1.5h-1.5v-1.5h-1.5v-1.5h1.5v-1.5h1.5v1.5h1.5v1.5zm5.25 0H18v1.5h-1.5v-1.5H15v-1.5h1.5v-1.5H18v1.5h1.5v1.5zM15 7.007v-5l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
