const closestStep = ({eventX, width, steps, snap, limit, side, forceRange}) => {
  const stepWidth = width / (steps.length - 1);
  let x = eventX;
  let minStep = Math.floor(x / stepWidth);
  let maxStep = Math.ceil(x / stepWidth);

  const left = minStep * stepWidth;
  const right = maxStep * stepWidth;

  const leftIsCloser = x - left < right - x;

  if (snap) {
    x = leftIsCloser ? left : right;
  }

  let step = leftIsCloser ? minStep : maxStep;

  if (snap && forceRange) {
    const handlesAtSameX = x === limit;

    if (handlesAtSameX) {
      if (side === 'left') {
        minStep = Math.floor((x - 1) / stepWidth);
        x = minStep * stepWidth;
        step = minStep;
      } else {
        maxStep = Math.ceil((x + 1) / stepWidth);
        x = maxStep * stepWidth;
        step = maxStep;
      }
    }
  }

  return {x, step};
};

export default closestStep;
