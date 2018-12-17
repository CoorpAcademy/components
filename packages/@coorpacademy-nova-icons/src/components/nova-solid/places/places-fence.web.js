import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      fill="currentColor"
      d="M21.773 5.724l-1.471-1.795a1 1 0 0 0-1.536-.013L17.237 5.72c-.153.181-.237.41-.237.647V8h-3V6.358a.997.997 0 0 0-.227-.634l-1.471-1.795a1 1 0 0 0-1.536-.013L9.237 5.72c-.153.181-.237.41-.237.647V8H6V6.358a.997.997 0 0 0-.227-.634L4.302 3.929a1 1 0 0 0-1.536-.013L1.237 5.72c-.153.181-.237.41-.237.647V19a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1h3v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1h3v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V6.358a.997.997 0 0 0-.227-.634zM17 10v2h-3v-2h3zm-8 0v2H6v-2h3zm-3 6v-2h3v2H6zm8 0v-2h3v2h-3z"
    />
  </svg>
);

export default SvgComponent;
