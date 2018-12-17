import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24H-.001z" />
    <Path
      fill="currentColor"
      d="M22.416 8.151L15.83 1.566c-.754-.754-2.074-.754-2.828 0L5.416 9.151a2.003 2.003 0 0 0 0 2.828l2.586 2.586-5.293 5.293 1.414 1.414 5.293-5.293 2.586 2.586a1.99 1.99 0 0 0 1.414.584 1.99 1.99 0 0 0 1.414-.584l7.586-7.586a2.003 2.003 0 0 0 0-2.828zm-8.708 8.121l-6-6 1.414-1.414 6 6-1.414 1.414zm2.5-2.499l-6-6 1.414-1.414 6 6-1.414 1.414zm2.5-2.5l-6-6 1.414-1.414 6 6-1.414 1.414z"
    />
  </Svg>
);

export default SvgComponent;
