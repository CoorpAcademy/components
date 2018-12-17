import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zm-6.399 19h-2v-3H8l-2-5h2l1 2.5 1-2.5h2l-1.985 4.964v3.036zm7.985 0h-2V16.31l-.168.252c-.371.558-1.293.558-1.664 0L14 16.31v3.697h-2v-7c0-.44.288-.829.71-.956a.998.998 0 0 1 1.122.401L15 14.204l1.168-1.752a.997.997 0 0 1 1.122-.401c.422.127.71.516.71.956v7zm-3-13v-5l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
