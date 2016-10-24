import isString from 'lodash/fp/isString';
import Bluebird from 'bluebird';

export const transformP = ({resolve}, {h, transformProps}) => {
  const transform = vNodeP =>
    Bluebird.resolve(vNodeP).then(vNode => {
      if (isString(vNode)) return vNode;
      const {tagName, properties, children} = resolve(vNode);

      return Bluebird.resolve(children)
        .map(transform)
        .then(_children => h(
          tagName,
          transformProps(properties),
          _children
        ));
    });

  return transform;
};

export const renderP = ({render}) => el => {
  const update = render(el);

  let lastProcessing = Bluebird.resolve();
  return vTreeP => {
    lastProcessing = lastProcessing
      .catch(() => Bluebird.resolve())
      .then(() => Bluebird.resolve(vTreeP).then(update));
    return lastProcessing;
  };
};
