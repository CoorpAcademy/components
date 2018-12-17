import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1.007H5c-1.103 0-2 .896-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zm-7.413 14.5H6.002v.75h2.249v1.498H6.002v.75h2.999v1.5H5.252a.75.75 0 0 1-.749-.75v-4.498c0-.415.335-.75.749-.75h3.749v1.5zm5.248 4.5h-1.686L12 18.808l-.562 1.199H9.751l1.405-2.998-1.405-3h1.686L12 15.208l.562-1.199h1.686l-1.405 3 1.406 2.998zm5.248-4.5h-2.999v.75h2.25v1.498h-2.25v.75h2.999v1.5h-3.748a.75.75 0 0 1-.75-.75v-4.498c0-.415.335-.75.75-.75h3.748v1.5zM15 7.007v-5l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
