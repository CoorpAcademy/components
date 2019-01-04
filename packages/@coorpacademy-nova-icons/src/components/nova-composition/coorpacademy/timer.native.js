import React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 25 25" {...props}>
    <G fill={props.color} fillRule="evenodd">
      <Path d="M18.281 11.742l-2.104 2.627a1.858 1.858 0 1 1-1.575-1.582l2.627-2.104c.699-.563 1.616.353 1.052 1.051v.008zM10.683 18.237a.951.951 0 0 0-.952-.951h-4c-1.267 0-1.267 1.902 0 1.902H9.73a.95.95 0 0 0 .951-.95l.003-.001z" />
      <Path d="M22.704 8.025c.2-.192.332-.446.373-.72a1.196 1.196 0 0 0-1.338-1.34 1.255 1.255 0 0 0-.72.375l-.986.986a9.216 9.216 0 0 0-4.487-1.88v-.895h.858a1.23 1.23 0 0 0 1.242-1.074 1.196 1.196 0 0 0-1.18-1.312h-4.164a1.23 1.23 0 0 0-1.242 1.073 1.194 1.194 0 0 0 1.189 1.313h.921v.893a9.284 9.284 0 0 0-4.267 1.717c-1.188.951.142 2.765 1.406 1.918a6.87 6.87 0 1 1 .424 11.352 1.19 1.19 0 0 0-1.547.23c-.463.55-.338 1.38.265 1.77a9.178 9.178 0 0 0 6.325 1.33 9.28 9.28 0 0 0 7.829-9.035 9.15 9.15 0 0 0-1.893-5.706l.992-.995z" />
      <Path d="M9.73 12.4c1.267 0 1.267-1.902 0-1.902H2.45c-1.267 0-1.267 1.902 0 1.902h7.28zM9.73 13.89H4.24c-1.268 0-1.268 1.901 0 1.901h5.49c1.267 0 1.267-1.902 0-1.902z" />
    </G>
  </Svg>
);

export default SvgComponent;
