// Every word a user can read or hear in a rendered tree: the text plus the readable attributes.
// Class names, data-* and role values are not words, so they never false-fail an absence test.
const READABLE_ATTRIBUTES = ['aria-label', 'title', 'placeholder', 'alt'];

const readable = container =>
  [
    container.textContent,
    ...[...container.querySelectorAll('[aria-label],[title],[placeholder],[alt]')].flatMap(node =>
      READABLE_ATTRIBUTES.map(name => node.getAttribute(name) || '')
    )
  ].join(' ');

export default readable;
