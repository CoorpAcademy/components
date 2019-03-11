import React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 30 30"
    xmlSpace="preserve"
    {...props}
  >
    <G transform="translate(-90 -593)">
      <G id="prefix__Group-7" transform="translate(24 580)">
        <G id="prefix__Group-3" transform="translate(66 13)">
          <G id="prefix__Group-9">
            <G id="prefix__Group-8">
              <G id="prefix__camera-circle">
                <G id="prefix__Line_Icons">
                  <G id="prefix__Group">
                    <Path
                      id="prefix__Shape"
                      className="prefix__st0"
                      d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 27C8.4 27 3 21.6 3 15S8.4 3 15 3s12 5.4 12 12-5.4 12-12 12z"
                    />
                  </G>
                </G>
              </G>
              <G transform="translate(10.5 10.5)" id="prefix__barcode-2">
                <Path
                  id="prefix__Path"
                  className="prefix__st0"
                  d="M1.5 1.5H3V0H.8C.3 0 0 .3 0 .7V3h1.5V1.5z"
                />
                <Path
                  className="prefix__st0"
                  d="M8.2 0H6v1.5h1.5V3H9V.7c0-.4-.3-.7-.8-.7zM1.5 6H0v2.2c0 .5.3.8.8.8H3V7.5H1.5V6zM7.5 7.5H6V9h2.2c.5 0 .8-.3.8-.8V6H7.5v1.5z"
                />
              </G>
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
