import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12.001 9c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zM13.001 22h-2a1 1 0 0 1-.954-.699c-.258-.818-.544-1.709-.736-2.283C8.724 19.016 7.979 19 7.979 19a1 1 0 0 1-.948-1.243l1.528-6.012C8.875 10.179 10.329 9 12.001 9s3.125 1.179 3.455 2.801l1.516 5.957a1.003 1.003 0 0 1-.948 1.243s-.744.016-1.331.018c-.192.574-.479 1.465-.737 2.283a1.002 1.002 0 0 1-.955.698zm-1.267-2h.534c.949-3 .998-3 1.732-3 .059 0 .116.005.173.015.113.005.323.005.552.003l-.243-.972c-.453-1.815-.453-1.815-.721-2.832l-.252-.96c-.152-.738-.795-1.254-1.508-1.254s-1.356.516-1.495 1.199l-.265 1.015c-.268 1.016-.268 1.016-.721 2.832l-.243.972c.231.002.441.002.554-.003.083-.015.175-.015.252-.015.657 0 .741.119 1.651 3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
