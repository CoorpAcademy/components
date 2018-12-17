import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.707 3.293l-3-3A1 1 0 0 0 15 0H9a1 1 0 0 0-.707.293l-3 3a.999.999 0 0 0 0 1.414l6 6a.997.997 0 0 0 1.414 0l6-6a.999.999 0 0 0 0-1.414zM11 7.586L8.414 5H11v2.586zM13 5h2.586L13 7.586V5zM9.414 2h5.172l1 1H8.414l1-1zM23 5h-2a1 1 0 0 0-.949.684l-2.488 7.465-.855-.855a.999.999 0 0 0-1.414 0l-2 2a1 1 0 0 0-.222 1.078l1.495 3.737A.992.992 0 0 0 14 20v3a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3a.985.985 0 0 0-.469-.826l1.363-2.727A.99.99 0 0 0 24 16V6a1 1 0 0 0-1-1zm-7 9.414l1.293 1.292a.999.999 0 0 0 1.657-.39L21.721 7H22v8.764L20.382 19h-3.704l-1.504-3.759.826-.827zM21 22h-5v-1h5v1zM8.707 12.293a.999.999 0 0 0-1.414 0l-.855.855-2.489-7.464A1 1 0 0 0 3 5H1a1 1 0 0 0-1 1v10c0 .155.036.309.105.447l1.363 2.727A.986.986 0 0 0 1 20v3a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3a.995.995 0 0 0-.566-.892l1.495-3.737a.999.999 0 0 0-.222-1.078l-2-2zM2 7h.279l2.771 8.316a1 1 0 0 0 1.657.39L8 14.414l.826.827L7.322 19H3.618L2 15.764V7zm6 15H3v-1h5v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
