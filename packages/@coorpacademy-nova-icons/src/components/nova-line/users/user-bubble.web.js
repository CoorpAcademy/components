import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M18.001 13v-2c2.206 0 4-1.794 4-4 0-2.205-1.794-4-4-4s-4 1.795-4 4c0 .874.277 1.704.801 2.4l-1.599 1.202A5.946 5.946 0 0 1 12.001 7c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6z"
      fill="currentColor"
    />
    <circle cx={13.001} cy={15} r={1} fill="currentColor" />
    <circle cx={15.501} cy={12.5} r={1.5} fill="currentColor" />
    <path
      d="M8.001 16c-2.206 0-4-1.794-4-4 0-2.205 1.794-4 4-4s4 1.795 4 4c0 2.206-1.794 4-4 4zm0-6c-1.103 0-2 .896-2 2 0 1.103.897 2 2 2s2-.897 2-2c0-1.104-.897-2-2-2zM16.001 24h-16v-1c0-3.533 3.29-6 8-6s8 2.467 8 6v1zM2.16 22h11.683c-.598-1.808-2.833-3-5.841-3s-5.244 1.192-5.842 3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
