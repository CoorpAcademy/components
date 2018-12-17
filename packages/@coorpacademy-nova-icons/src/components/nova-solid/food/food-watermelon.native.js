import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <Path
      fill="currentColor"
      d="M16.707 1.293a.999.999 0 0 0-1.414 0l-14 14a.998.998 0 0 0 0 1.413C3.99 19.405 6.215 22 11 22c6.58 0 11-4.42 11-11 0-4.776-2.588-7.001-5.293-9.707zM13 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2 8c-3.723 0-5.518-1.931-7.586-4l1.293-1.293L6 16c2.734 2.734 7.267 2.734 10 0 2.734-2.733 2.734-7.266 0-10l-1.293-1.293L16 3.414c2.059 2.058 4 3.855 4 7.586 0 5.551-3.449 9-9 9z"
    />
  </Svg>
);

export default SvgComponent;
