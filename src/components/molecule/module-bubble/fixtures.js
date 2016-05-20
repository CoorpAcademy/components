const fixture1 = {
  props: {
    module: {
      label: 'foo',
      status: 'success'
    },
    onClick: () => null
  }
};

const fixture2 = {
  props: {
    module: {
      filtered: false,
      disabled: false,
      label: 'foo',
      status: 'success'
    },
    onClick: () => null
  }
};

export default [fixture1, fixture2];
