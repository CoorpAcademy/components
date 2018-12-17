import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8.5} cy={17.502} r={1} />
      <circle cx={16.5} cy={17.502} r={1} />
      <circle cx={6.5} cy={20.502} r={1} />
      <circle cx={10.5} cy={20.502} r={1} />
      <circle cx={14.5} cy={20.502} r={1} />
      <path d="M16 14.002h-3v-4l-4 5h3v4z" />
      <path d="M15.1 3.002c-1.634 0-3.092.816-3.986 2.105 1.115.366 1.949 1.491 2.157 1.981-.014.011-.819.593-.849.613-1.047-1.517-1.947-1.843-2.922-1.843-1.93 0-3.5 1.604-3.5 3.573 0 1.911 1.482 3.462 3.333 3.553L14 7.151v5.851h1.1c2.702 0 4.9-2.241 4.9-5 0-2.757-2.198-5-4.9-5z" />
    </g>
  </svg>
);

export default SvgComponent;
