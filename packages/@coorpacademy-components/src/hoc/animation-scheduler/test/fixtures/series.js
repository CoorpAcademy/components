import React from 'react';
import Animation, {LINEAR} from '../../../animation';
import {state} from './parallel';

export default {
  props: {
    animated: false
  },
  children: (
    <div>
      <Animation name="first" bezier={LINEAR} duration={2000}>
        {state}
      </Animation>
      <br />
      <Animation name="second" bezier={LINEAR} duration={2000} after="first">
        {state}
      </Animation>
    </div>
  )
};
