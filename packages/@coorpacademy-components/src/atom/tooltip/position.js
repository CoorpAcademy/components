const MARGIN = 12;
const GAP = 8;
const MAX_HEIGHT = 360;

const clamp = (value, min, max) => Math.max(min, Math.min(value, Math.max(min, max)));

// Geometry only: the caller measures the anchor and the unconstrained panel content.
export const getFloatingPosition = (anchor, box, viewport, preferred) => {
  const width = Math.min(box.width, Math.max(0, viewport.width - MARGIN * 2));
  const height = Math.min(box.height, MAX_HEIGHT, Math.max(0, viewport.height - MARGIN * 2));
  const available = {
    left: anchor.left - GAP - MARGIN,
    right: viewport.width - anchor.right - GAP - MARGIN,
    top: anchor.top - GAP - MARGIN,
    bottom: viewport.height - anchor.bottom - GAP - MARGIN
  };
  const opposite = {left: 'right', right: 'left', top: 'bottom', bottom: 'top'};
  const fits = side => available[side] >= (side === 'left' || side === 'right' ? width : height);
  let side = preferred;
  if (!fits(side)) {
    side = opposite[preferred];
    if (!fits(side)) side = available.bottom >= available.top ? 'bottom' : 'top';
  }
  const vertical = side === 'top' || side === 'bottom';
  const maxHeight = vertical ? Math.max(0, Math.min(height, available[side])) : height;
  const left = {
    left: anchor.left - GAP - width,
    right: anchor.right + GAP,
    top: anchor.left + (anchor.width - width) / 2,
    bottom: anchor.left + (anchor.width - width) / 2
  }[side];
  const top = {
    top: anchor.top - GAP - maxHeight,
    bottom: anchor.bottom + GAP,
    left: anchor.top + (anchor.height - maxHeight) / 2,
    right: anchor.top + (anchor.height - maxHeight) / 2
  }[side];
  return {
    side,
    left: clamp(left, MARGIN, viewport.width - width - MARGIN),
    top: clamp(top, MARGIN, viewport.height - maxHeight - MARGIN),
    maxHeight
  };
};
