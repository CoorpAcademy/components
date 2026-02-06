const browserEnv = require('browser-env');

browserEnv(['window', 'document', 'navigator']);
if (typeof global.self === 'undefined') {
  global.self = global.window || global;
}

if (global.window) {
  Object.defineProperty(global, 'window', {
    value: global.window,
    writable: true,
    configurable: true,
    enumerable: true
  });
}

const createCanvasContextStub = () => ({
  fillStyle: null,
  fillRect: () => {},
  clearRect: () => {},
  getImageData: () => ({data: []}),
  putImageData: () => {},
  createImageData: () => [],
  setTransform: () => {},
  drawImage: () => {},
  save: () => {},
  fillText: () => {},
  restore: () => {},
  beginPath: () => {},
  moveTo: () => {},
  lineTo: () => {},
  closePath: () => {},
  stroke: () => {},
  translate: () => {},
  scale: () => {},
  rotate: () => {},
  arc: () => {},
  fill: () => {},
  measureText: () => ({width: 0}),
  transform: () => {},
  rect: () => {},
  clip: () => {}
});

if (global.window) {
  if (!global.window.HTMLCanvasElement) {
    global.window.HTMLCanvasElement = function CanvasElementStub() {};
  }

  global.window.HTMLCanvasElement.prototype.getContext = () => createCanvasContextStub();

  if (!global.HTMLCanvasElement) {
    global.HTMLCanvasElement = global.window.HTMLCanvasElement;
  }
}

const patchCreateElement = doc => {
  if (!doc || typeof doc.createElement !== 'function') {
    return;
  }

  const originalCreateElement = doc.createElement.bind(doc);
  doc.createElement = tagName => {
    const element = originalCreateElement(tagName);
    if (tagName === 'canvas') {
      element.getContext = () => createCanvasContextStub();
    }
    return element;
  };
};

patchCreateElement(global.document);
patchCreateElement(global.window && global.window.document);
