import React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" viewBox="0 0 30 30" {...props}>
    <G id="prefix___x30_6-_x2F_-QUESTION">
      <G id="prefix__V2-IMG_DARK_GRADIENT" transform="translate(-401 -837)">
        <G id="prefix__Group-14" transform="translate(401 830)">
          <G id="prefix__filter-video" transform="translate(0 7)">
            <G id="prefix__Filled_Icons_1_">
              <G id="prefix__Filled_Icons">
                <G id="prefix__Group">
                  <G id="prefix__Group-23">
                    <Path
                      id="prefix__Shape"
                      d="M4.3 27.5c-1 0-1.9-.8-1.9-1.9V5.3H.6c-.3 0-.6.3-.6.6v23.5c0 .3.3.6.6 3000.6h23.5c.3 0 .6-.3.6-.6v-1.9H4.3z"
                    />
                    <Path
                      id="prefix__Shape_1_"
                      d="M29.4 0H4.2c-.4 0-.7.3-.7.6v25.2c0 .3.3.6.6.6h25.2c.3 0 .6-.3.6-.6V.6c.1-.3-.2-.6-.5-.6zm-7.3 13.4l-8.8 5.5c-.4.3-1 0-1-.5V8.2c0-.5.5-.8.9-.6l8.8 4.6c.5.3.6.9.1 1.2z"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
