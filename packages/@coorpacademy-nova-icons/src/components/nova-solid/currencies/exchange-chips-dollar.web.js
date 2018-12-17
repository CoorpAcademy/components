import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.947 16.759c-.374 2.952-2.895 5.244-5.947 5.244-3.309 0-6-2.691-6-6 0-3.051 2.292-5.574 5.244-5.947a9.066 9.066 0 0 1-.241-1.983C3.062 8.565 0 11.93 0 16.003c0 4.411 3.589 8 8 8 4.073 0 7.438-3.062 7.931-7.003a9.068 9.068 0 0 1-1.984-.241zM4 7.003l4-4H5v-1h4v-2H4c-.552 0-1 .449-1 1v2H0l4 4zM20 17.003l-4 4h3v1h-4v2h5a1 1 0 0 0 1-1v-2h3l-4-4z" />
      <path d="M16 16.003c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm-1-2.09a6.002 6.002 0 0 1-3.62-2.086l1.771-1.024A3.98 3.98 0 0 0 15 11.86v2.053zm2 0v-2.052a3.986 3.986 0 0 0 1.85-1.058l1.771 1.022A5.998 5.998 0 0 1 17 13.913zm5-5.91a5.96 5.96 0 0 1-.382 2.088l-1.779-1.027c.094-.34.161-.691.161-1.061s-.067-.72-.161-1.06l1.779-1.028c.243.651.382 1.353.382 2.088zm-5-5.91a5.998 5.998 0 0 1 3.621 2.088L18.85 5.204A4.006 4.006 0 0 0 17 4.144V2.093zm1 5.91c0 1.103-.897 2-2 2s-2-.897-2-2c0-1.102.897-2 2-2s2 .898 2 2zm-3-5.91v2.051c-.711.186-1.35.55-1.85 1.059l-1.772-1.022A6.008 6.008 0 0 1 15 2.093zm-4.618 3.822l1.779 1.027c-.094.34-.161.691-.161 1.061s.067.722.162 1.062l-1.779 1.028A5.968 5.968 0 0 1 10 8.003c0-.735.139-1.437.382-2.088zM9 21.003v-1.051c1.14-.232 2-1.242 2-2.449 0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1h1.805a8.97 8.97 0 0 1-1.782-3H7v1.051c-1.14.232-2 1.243-2 2.449 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H5v2h2v1h2z" />
    </g>
  </svg>
);

export default SvgComponent;
