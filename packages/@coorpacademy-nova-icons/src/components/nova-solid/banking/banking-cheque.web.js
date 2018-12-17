import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={13.5} cy={8.498} r={1.5} />
      <circle cx={17.5} cy={8.498} r={1.5} />
      <path d="M23 2.998H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1zm-21 16v-7h2v-2H2v-2h2v-2H2v-1h20v1h-2v2h2v2h-2v2h2v7H2z" />
      <path d="M7.217 8.196l.49-.491-1.414-1.413-1 1a.998.998 0 0 0-.187 1.153l.678 1.356-.49.491 1.414 1.414 1-1a1 1 0 0 0 .188-1.155l-.679-1.355zM9 6.998h2v3H9zM18.707 14.792c-.296-.297-.793-.794-1.707-.794-1.118 0-1.604.973-1.894 1.553l-.018.036a13.614 13.614 0 0 1-.139-.405c-.308-.921-.728-2.185-1.949-2.185-1.501 0-2.595 1.956-2.894 2.553l1.788.897c.256-.508.653-1.054.916-1.307.087.207.178.481.242.673.307.922.727 2.183 1.948 2.183 1.118 0 1.604-.972 1.895-1.552.062-.125.148-.297.219-.408.037.027.09.079.18.169.297.296.793.792 1.707.792h1v-2h-1c-.077.001-.087.001-.294-.205z" />
    </g>
  </svg>
);

export default SvgComponent;
