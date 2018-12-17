import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12.225 13.001H15v-5h6v-2c0-1.103-.897-2-2-2H3c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h11.892l-2.667-8zm-.225-7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-8 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"
    />
    <Path fill="currentColor" d="M17 21.001l-2-6h2v-5h3v4l3 1v6z" />
  </Svg>
);

export default SvgComponent;
