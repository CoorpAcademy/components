import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M22.207 8.793L20.834 7.42c.149-1.237-.304-2.305-1.127-3.127a3.793 3.793 0 0 0-3.096-1.095l-1.404-1.405c-1.238-1.237-3.449-.966-5.035.621l-7.758 7.758c-1.586 1.586-1.858 3.797-.621 5.034l1.373 1.373c-.149 1.237.304 2.305 1.127 3.127.826.826 1.893 1.276 3.127 1.128l1.373 1.372c.5.5 1.195.767 1.964.767.194 0 .394-.017.595-.051.889-.153 1.768-.628 2.477-1.337l7.758-7.758c1.585-1.584 1.858-3.796.62-5.034zm-19 5c-.374-.374-.188-1.397.621-2.207l7.758-7.758c.811-.81 1.834-.994 2.207-.622l.822.822c-.478.389-10.203 10.117-10.588 10.585l-.82-.82zm2.5 4.5c-.383-.383-.586-.83-.586-1.293 0-.463.203-.91.586-1.294l10-10c.383-.382.83-.584 1.293-.584s.91.203 1.293.585c.383.384.586.83.586 1.293 0 .462-.203.91-.586 1.293l-10 10c-.383.384-.83.585-1.293.585s-.91-.201-1.293-.585zm14.465-5.879l-7.758 7.758c-.413.414-.924.697-1.4.779-.168.029-.578.069-.807-.158l-.82-.819c.468-.386 10.202-10.118 10.586-10.587l.82.819c.374.376.187 1.398-.621 2.208z" />
      <path d="M6.293 16.293l10-10 1.413 1.413-10 10z" />
    </g>
  </svg>
);

export default SvgComponent;
