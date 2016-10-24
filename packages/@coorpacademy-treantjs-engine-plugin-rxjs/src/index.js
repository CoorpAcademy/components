import isString from 'lodash/fp/isString';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toArray';

export const transform$ = ({resolve}, {h, transformProps}) => {
  const transform = vNode$ => {
    return Observable.from(vNode$).map(vNode => {
      if (isString(vNode)) return Observable.of(vNode);
      const {tagName, properties, children} = resolve(vNode);

      return transform(children)
        .delay(0)
        .concatAll()
        .toArray()
        .map(_children => h(
          tagName,
          transformProps(properties),
          _children
        ));
    });
  };
  return transform;
};

export const render$ = ({render}) => el => {
  const update = render(el);

  return vTree$ => Observable.from(vTree$)
    .switch()
    .map(update);
};
