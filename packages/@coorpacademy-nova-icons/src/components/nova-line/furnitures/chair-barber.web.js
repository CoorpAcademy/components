import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <path
      d="M23 9h-4v2h1v2h-1a1 1 0 0 0-.684-.949 18.136 18.136 0 0 0-.316-.099V5c0-3-3.903-3-6-3S6 2 6 5v6.952c-.18.055-.295.092-.316.099A1 1 0 0 0 5 13H4v-2h1V9H1v2h1v3a1 1 0 0 0 1 1h2v1a1 1 0 0 0 1 1h5v3H8v2h8v-2h-3v-3h5a1 1 0 0 0 1-1v-1h2a1 1 0 0 0 1-1v-3h1V9zM12 4c1.398 0 4 0 4 1v1H8V5c0-1 2.602-1 4-1zM8 8h8v3.451c-1.133-.236-2.558-.451-4-.451s-2.867.215-4 .451V8zm9 7H7v-1.252c1.019-.279 3.026-.748 5-.748s3.981.469 5 .748V15z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
