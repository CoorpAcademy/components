import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24.002h-24z" />
    <Path
      d="M22.846 16.475a1 1 0 0 0-.851-.475h-9v-.396l6.586-1.319a2.812 2.812 0 0 0 1.781-1.193 2.819 2.819 0 0 0 .412-2.108C20.831 6.358 16.715 3 11.987 3 6.48 3 2 7.48 2 12.987c0 6.224 5.509 9.763 8.196 9.763a2.775 2.775 0 0 0 2.478-1.527l.697.558a.997.997 0 0 0 .624.219h6c.379 0 .725-.214.895-.553l2-4c.154-.31.138-.678-.044-.972zm-12.168 4.107a.798.798 0 0 1-.688.142A7.986 7.986 0 0 1 4 12.987C4 8.583 7.583 5 11.987 5c3.781 0 7.073 2.686 7.827 6.382a.8.8 0 0 1-.625.943l-8.193 1.642V16h-1.39a1.489 1.489 0 0 0-1.111-.5 1.5 1.5 0 1 0 .61 2.868l1.979 1.583c-.055 0-.19.463-.406.631zM11.846 18h3.531l-1 2h-.031l-2.5-2zm7.531 2h-2.764l1-2h2.764l-1 2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
