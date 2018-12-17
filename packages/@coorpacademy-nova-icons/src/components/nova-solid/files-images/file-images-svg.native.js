import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 15.5H6.375a.376.376 0 0 0 0 .75h.75c1.034 0 1.875.842 1.875 1.875A1.877 1.877 0 0 1 7.125 20H4.5v-1.5h2.625a.376.376 0 0 0 0-.75h-.75A1.876 1.876 0 0 1 4.5 15.875C4.5 14.842 5.341 14 6.375 14H9v1.5zm3.766 4.5h-1.543L9.75 14h1.5l.739 2.926.718-2.926h1.543l-1.5 5.941.016.059zm6.734-4.5h-3v3H18v-.75h-.75v-1.5h2.25v2.25c0 .827-.673 1.5-1.5 1.5h-1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h3v1.5zM15 7V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
