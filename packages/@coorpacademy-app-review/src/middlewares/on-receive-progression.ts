import type {Middleware, Store} from 'redux';
import {Dispatch} from 'redux';
import get from 'lodash/fp/get';

// eslint-disable-next-line import/no-named-as-default
import fetchSlide from '../services/fetch-slide';

import {
  ErrorFetchingSlide,
  errorFetchingSlide,
  StoreFirstSlide,
  storeFirstSlide
} from '../actions/data/slides';
import {ReceiveProgression, RECEIVE_PROGRESSION} from '../actions/data/progression';

const onReceiveProgression: Middleware<
  {},
  Store,
  Dispatch<ReceiveProgression | StoreFirstSlide | ErrorFetchingSlide>
> =
  ({dispatch}) =>
  next =>
  (action: ReceiveProgression) => {
    if (action.type === RECEIVE_PROGRESSION) {
      const {progression, token} = action.payload;
      const slideRef: string = get('state.nextContent.ref', progression);
      // TOASK: do we need to check for exit nodes before fetching??

      // TODO: To implement fetchSlide in next ticket
      fetchSlide(slideRef, token)
        .then(slide => {
          return dispatch(storeFirstSlide(slide));
        })
        .catch(err => {
          return dispatch(errorFetchingSlide(err));
        });
    }

    return next(action);
  };

export default onReceiveProgression;
