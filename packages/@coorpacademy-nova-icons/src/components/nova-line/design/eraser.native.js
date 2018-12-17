import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21.414 8.394l-4.95-4.951c-.755-.752-2.071-.754-2.828.001L1.615 15.465c-.78.78-.78 2.049 0 2.828L3.322 20h9.313l8.778-8.778c.379-.378.587-.88.587-1.414 0-.534-.208-1.037-.586-1.414zM11.808 18H4.15l-1.121-1.121 4.804-4.804 4.95 4.951-.975.974zm2.389-2.389l-4.95-4.95 5.804-5.803L20 9.808l-5.803 5.803z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
