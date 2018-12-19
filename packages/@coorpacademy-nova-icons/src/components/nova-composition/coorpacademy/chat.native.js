import React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" viewBox="0 0 34 34" {...props}>
    <G id="prefix___x30_6-_x2F_-QUESTION">
      <G id="prefix__V2-IMG_DARK_GRADIENT" transform="translate(-1010 -835)">
        <G id="prefix__Group-14" transform="translate(401 830)">
          <G id="prefix__Group-22" transform="translate(609 5)">
            <Path
              id="prefix__Shape"
              d="M25.4 12.6C26.6 5.7 20.2.4 12.8.4 5.7.4 0 5.1 0 10.9c0 2.8 1.2 5.4 3.3 7.3L.8 22.6c-.3.6.2 1.3.9 1l6.9-2.7c1.2.3 2.1.5 3 .4 1-5.4 7-9.8 13.8-8.7z"
            />
            <Path
              id="prefix__Shape_1_"
              d="M23.4 13.8c-5.8 0-10.6 4.2-10.6 9.2 0 6.6 7.5 11.3 14.2 8.6.4.2 5 1.9 5.4 2 .6.2 1.2-.4.9-1l-1.9-3.8C33 27.3 34 25.3 34 23c0-5-4.9-9.2-10.6-9.2z"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
