import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M21.799 12.398l-2.366-3.154 2.121-1.414-1.109-1.665-1.758 1.172-.707-3.536a1 1 0 0 0-.98-.804H7a.998.998 0 0 0-.98.804l-.708 3.537-1.758-1.172-1.11 1.664 2.121 1.414-2.366 3.154a.997.997 0 0 0-.2.599v4a1 1 0 0 0 1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h2.006a19.906 19.906 0 0 1-1.696-2h-5.31v-1.882l4.443.493c-.269-.535-.443-1.06-.443-1.524 0-.182.021-.358.059-.529l-3.209-.357 1.65-2.2h11l1.65 2.2-3.209.357a2.5 2.5 0 0 1 .059.529c0 .465-.175.989-.443 1.524l4.443-.493v1.882h-5.31a20.039 20.039 0 0 1-1.696 2h2.006v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0 1-1v-4a.997.997 0 0 0-.2-.599zm-5.62-7.4l.601 3H7.219l.601-3h8.359zm-9.18 13v1h-2v-1h2zm12 1h-2v-1h2v1z" />
      <Path d="M13.499 11.584a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0-3 0c0 1.5 3 4.5 3 4.5s3-3 3-4.5a1.5 1.5 0 0 0-1.5-1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
