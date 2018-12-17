import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M24 7V5h-1.102a4.968 4.968 0 0 0-.733-1.754l.784-.784-1.414-1.414-.784.784a4.955 4.955 0 0 0-1.752-.731V0h-2v1.102a4.96 4.96 0 0 0-1.753.731l-.783-.783-1.414 1.415.783.783A4.949 4.949 0 0 0 13.1 5h-1.102v2H13.1c.13.637.384 1.229.732 1.754l-.783.784 1.415 1.413.783-.784a4.967 4.967 0 0 0 1.753.731v1.103h2v-1.103a4.961 4.961 0 0 0 1.753-.732l.784.783 1.413-1.414-.784-.783A4.957 4.957 0 0 0 22.898 7H24zm-6.002 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      <path d="M19 20.277V13h-7.277c-.347-.595-.984-1-1.723-1s-1.376.405-1.723 1H3V7.723c.3-.175.548-.423.723-.723H9V5H3.723A1.994 1.994 0 1 0 1 7.723v12.554c-.595.347-1 .986-1 1.723a1.994 1.994 0 1 0 3.723 1h12.555c.347.595.984 1 1.723 1a2 2 0 0 0 2-2A1.998 1.998 0 0 0 19 20.277zM9 21H3.723A2.012 2.012 0 0 0 3 20.277V15h5.277c.175.3.423.548.723.723V21zm7.277 0H11v-5.277c.3-.175.548-.423.723-.723h5.278v5.277c-.3.174-.549.422-.724.723z" />
    </g>
  </svg>
);

export default SvgComponent;
