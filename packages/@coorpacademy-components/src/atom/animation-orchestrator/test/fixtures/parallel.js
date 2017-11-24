import React from 'react';
import identity from 'lodash/fp/identity';
import Animation, {LINEAR} from '../../../animation';

export default {
  props: {
    animated: false
  },
  children: (
    <div>
      <Animation name="first" bezier={LINEAR} duration={5000}>
        {identity}
      </Animation>
      <br />
      <Animation name="second" bezier={LINEAR} duration={5000} after="first">
        {identity}
      </Animation>
    </div>
  )
};
