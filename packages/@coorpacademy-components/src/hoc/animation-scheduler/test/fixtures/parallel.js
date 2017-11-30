import React from 'react';
import Animation, {LINEAR} from '../../../animation';

export const state = progress => {
  switch (progress) {
    case 0: {
      return 'waiting';
    }
    case 1: {
      return 'done';
    }
    default: {
      return 'in progress';
    }
  }
};

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
      <br />
      <Animation name="secondPrime" bezier={LINEAR} duration={4000} after="first">
        {state}
      </Animation>
      <br />
      <Animation name="third" bezier={LINEAR} duration={2000} after={['second', 'secondPrime']}>
        {state}
      </Animation>
    </div>
  )
};
