import {Props} from '../../index.native';
import type {Choice} from '../../../../../types/progression-engine.d';

type Fixture = {props: Props};

export const createSelectChoice = ({name}: {name: string}): Choice => ({
  _id: '456',
  type: 'select',
  name,
  label: '',
  items: [
    {
      _id: '1',
      text: 'Play Store',
      value: 'play_store'
    },
    {
      _id: '2',
      text: 'App Store',
      value: 'app_store'
    },
    {
      _id: '3',
      text: 'Apple Store',
      value: 'apple_store'
    },
    {
      _id: '4',
      text: 'Pineapple Store',
      value: 'pineapple_store'
    }
  ]
});

const select = createSelectChoice({name: 'sel456'});

const fixture: Fixture = {
  props: {values: select.items || []}
};

export default fixture;
