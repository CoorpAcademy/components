import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <path
      d="M20 7v5h-4v-1h2V8l-2-4H8L6 8v3h2v1H4V7H2v15h2v-1.63L9.46 14h5.08L20 20.37V22h2V7h-2zm-4 3h-2V9h2v1zM9 5h6l1 2H8l1-2zM8 9h2v1H8V9zm-4 8.297V14h2.826L4 17.297zM10 12v-1h4v1h-4zm7.174 2H20v3.297L17.174 14z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
