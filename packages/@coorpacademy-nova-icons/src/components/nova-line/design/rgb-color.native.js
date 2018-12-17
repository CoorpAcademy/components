import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M19.482 8.156C19.301 4.182 16.02 1 12 1S4.699 4.182 4.518 8.156C2.408 9.486 1 11.828 1 14.5 1 18.636 4.364 22 8.5 22a7.455 7.455 0 0 0 3.5-.871 7.455 7.455 0 0 0 3.5.871c4.136 0 7.5-3.364 7.5-7.5 0-2.672-1.408-5.014-3.518-6.344zm-3.753 4.375a7.496 7.496 0 0 0-1.878-3.277A5.48 5.48 0 0 1 15.5 9c.679 0 1.326.13 1.927.356a5.49 5.49 0 0 1-1.698 3.175zM12 18.739a5.505 5.505 0 0 1-1.849-2.979c.593.151 1.21.24 1.849.24s1.256-.089 1.849-.239A5.506 5.506 0 0 1 12 18.739zM6.573 9.356A5.458 5.458 0 0 1 8.5 9c.575 0 1.128.09 1.649.254a7.486 7.486 0 0 0-1.878 3.277 5.49 5.49 0 0 1-1.698-3.175zM12 14a5.457 5.457 0 0 1-1.927-.355A5.498 5.498 0 0 1 12 10.261a5.498 5.498 0 0 1 1.927 3.384A5.457 5.457 0 0 1 12 14zm0-11c2.599 0 4.777 1.813 5.349 4.24A7.473 7.473 0 0 0 15.5 7a7.456 7.456 0 0 0-3.5.872A7.456 7.456 0 0 0 8.5 7c-.639 0-1.256.089-1.849.24C7.223 4.813 9.401 3 12 3zM3 14.5c0-1.593.685-3.025 1.771-4.031a7.515 7.515 0 0 0 3.247 4.375 7.477 7.477 0 0 0 2.132 4.904A5.506 5.506 0 0 1 3 14.5zM15.5 20a5.51 5.51 0 0 1-1.649-.252 7.477 7.477 0 0 0 2.132-4.904 7.515 7.515 0 0 0 3.247-4.375A5.484 5.484 0 0 1 21 14.5c0 3.033-2.467 5.5-5.5 5.5z"
      fill="#767676"
    />
  </Svg>
);

export default SvgComponent;
