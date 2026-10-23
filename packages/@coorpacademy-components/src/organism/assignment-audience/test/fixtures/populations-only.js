import combined from './combined';
import {idleUpload} from './idle';

export default {
  props: {
    ...combined.props,
    upload: idleUpload,
    individuals: {...combined.props.individuals, selected: []},
    total: {label: 'Estimated audience: 648 learners', detail: '412 Managers FR · 236 Managers DE'}
  }
};
