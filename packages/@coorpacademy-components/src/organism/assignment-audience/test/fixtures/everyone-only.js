import fixture from './idle';

// A brand with no population: Everyone is the only source, and no explanation is given.
export default {
  props: {
    ...fixture.props,
    everyone: {...fixture.props.everyone, value: true},
    disabledExplanation: undefined,
    populations: undefined,
    upload: undefined,
    individuals: undefined
  }
};
