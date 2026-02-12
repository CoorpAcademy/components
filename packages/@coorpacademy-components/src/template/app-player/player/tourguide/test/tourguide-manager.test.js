import test from 'ava';
import React from 'react';
import {act} from 'react-dom/test-utils';
import {render, cleanup} from '@testing-library/react';
import TourGuideManager, {__test__} from '..';

const flushEffects = () =>
  new Promise(resolve => {
    setTimeout(resolve, 0);
  });

const createStep = (overrides = {}) => ({
  target: 'body',
  content: 'Hello',
  order: 1,
  group: 'group-a',
  ...overrides
});

const createClient = () => {
  return {
    isVisible: false,
    dialog: {remove: () => {}},
    backdrop: {remove: () => {}},
    start: () => Promise.resolve(),
    exit: () => Promise.resolve(),
    isFinished: () => false
  };
};

test('serialize helpers normalize content and build stable keys', t => {
  const {
    normalizeStepContent,
    serializeSteps,
    serializeOptions,
    TOURGUIDE_DIALOG_CLASS,
    shouldStartTour
  } = __test__;
  t.is(normalizeStepContent('abc'), 'abc');
  t.is(
    normalizeStepContent({
      toString: () => 'xyz'
    }),
    'xyz'
  );
  t.is(normalizeStepContent({}), '');
  t.is(normalizeStepContent(42), '');
  t.is(normalizeStepContent({toString: 'nope'}), '');

  const stepsKey = serializeSteps([
    createStep({content: 'A'}),
    createStep({target: '.foo', order: 2, group: 'g', content: {toString: () => 'B'}})
  ]);
  t.true(stepsKey.includes('body|1|group-a|A'));
  t.true(stepsKey.includes('.foo|2|g|B'));
  const stepsKeyWithMissingFields = serializeSteps([
    createStep({target: null, order: null, group: null, content: 'C'})
  ]);
  t.true(stepsKeyWithMissingFields.includes('|||C'));
  t.is(serializeSteps(), '');

  t.is(serializeOptions({b: 2, a: 1}), 'a:1|b:2');
  t.is(serializeOptions(), '');
  t.is(TOURGUIDE_DIALOG_CLASS, 'coorp-tourguide-dialog');

  const fakeClient = {isFinished: () => false};
  t.true(shouldStartTour(true, 'g', fakeClient));
  t.false(shouldStartTour(false, 'g', fakeClient));
});

test('does not create client when steps are empty', t => {
  let called = false;
  const testClientFactory = () => {
    called = true;
    return createClient();
  };

  let unmount;
  act(() => {
    ({unmount} = render(<TourGuideManager steps={[]} testClientFactory={testClientFactory} />));
  });
  unmount();
  cleanup();
  t.false(called);
});

test('does not create client when steps are missing', t => {
  let called = false;
  const testClientFactory = () => {
    called = true;
    return createClient();
  };

  let unmount;
  act(() => {
    ({unmount} = render(<TourGuideManager testClientFactory={testClientFactory} />));
  });
  unmount();
  cleanup();
  t.false(called);
});

test('creates client with sanitized options and sets activeStep', t => {
  let receivedOptions;
  const client = createClient();
  const testClientFactory = options => {
    receivedOptions = options;
    return client;
  };

  act(() => {
    render(
      <TourGuideManager
        steps={[createStep()]}
        options={{dialogClass: 'bad', autoScroll: true}}
        startStep={2}
        testClientFactory={testClientFactory}
      />
    );
  });
  cleanup();

  t.is(receivedOptions.dialogClass, __test__.TOURGUIDE_DIALOG_CLASS);
  t.true(receivedOptions.autoScroll);
  t.is(receivedOptions.steps.length, 1);
  t.is(client.activeStep, 2);
});

test('creates a client without a factory when TourGuideClient is available', t => {
  t.notThrows(() => {
    const {unmount} = render(<TourGuideManager steps={[createStep()]} />);
    unmount();
    cleanup();
  });
});

test('autoStart triggers start and toggling autoStart calls exit', async t => {
  let startCalls = 0;
  let exitCalls = 0;
  const client = createClient();
  client.start = () => {
    startCalls += 1;
    client.isVisible = true;
    return Promise.resolve();
  };
  client.exit = () => {
    exitCalls += 1;
    return Promise.resolve();
  };

  const testClientFactory = () => client;
  let rerender;
  let unmount;
  act(() => {
    ({rerender, unmount} = render(
      <TourGuideManager
        steps={[createStep()]}
        autoStart
        group="g"
        testClientFactory={testClientFactory}
      />
    ));
  });
  t.is(startCalls, 1);

  act(() => {
    rerender(
      <TourGuideManager
        steps={[createStep()]}
        autoStart={false}
        group="g"
        testClientFactory={testClientFactory}
      />
    );
  });
  await flushEffects();
  t.is(exitCalls, 1);
  unmount();
  cleanup();
});

test('callbacks are no-ops when handlers are missing', async t => {
  const client = createClient();
  const testClientFactory = () => client;

  act(() => {
    render(
      <TourGuideManager steps={[createStep()]} autoStart testClientFactory={testClientFactory} />
    );
  });
  await flushEffects();

  t.notThrows(() => {
    client._globalAfterChangeCallback(0, 1);
    client._globalAfterExitCallback();
    client._globalFinishCallback();
  });

  cleanup();
});

test('autoStart does not start when tour is already finished for group', async t => {
  let startCalls = 0;
  const client = createClient();
  client.isFinished = () => true;
  client.start = () => {
    startCalls += 1;
    return Promise.resolve();
  };

  const testClientFactory = () => client;
  act(() => {
    render(
      <TourGuideManager
        steps={[createStep()]}
        autoStart
        group="g"
        testClientFactory={testClientFactory}
      />
    );
  });

  await flushEffects();
  t.is(startCalls, 0);
  cleanup();
});

test('autoStart exits before restarting when group changes', async t => {
  let startCalls = 0;
  let exitCalls = 0;
  const client = createClient();
  client.start = () => {
    startCalls += 1;
    return Promise.resolve();
  };
  client.exit = () => {
    exitCalls += 1;
    return Promise.resolve();
  };

  const testClientFactory = () => client;
  let rerender;
  act(() => {
    ({rerender} = render(
      <TourGuideManager
        steps={[createStep()]}
        autoStart
        group="g1"
        testClientFactory={testClientFactory}
      />
    ));
  });
  t.is(startCalls, 1);

  act(() => {
    rerender(
      <TourGuideManager
        steps={[createStep()]}
        autoStart
        group="g2"
        testClientFactory={testClientFactory}
      />
    );
  });
  await flushEffects();

  t.is(exitCalls, 1);
  t.is(startCalls, 2);
  cleanup();
});

test('recreates client when steps/options change and exits before restarting', async t => {
  let startCalls = 0;
  let exitCalls = 0;
  const createdOptions = [];
  const client = createClient();
  client.start = () => {
    startCalls += 1;
    return Promise.resolve();
  };
  client.exit = () => {
    exitCalls += 1;
    return Promise.resolve();
  };

  const testClientFactory = options => {
    createdOptions.push(options);
    return client;
  };

  let rerender;
  let unmount;
  act(() => {
    ({rerender, unmount} = render(
      <TourGuideManager
        steps={[createStep({content: 'A'})]}
        autoStart
        options={{autoScroll: true}}
        testClientFactory={testClientFactory}
      />
    ));
  });
  t.is(startCalls, 1);
  client.isVisible = true;

  act(() => {
    rerender(
      <TourGuideManager
        steps={[createStep({content: 'B'})]}
        autoStart
        options={{autoScroll: false}}
        testClientFactory={testClientFactory}
      />
    );
  });
  await flushEffects();

  // exit() can be called twice here:
  // 1) cleanup of the old client when steps/options change
  // 2) autoStart update cycle forces an exit before restart
  t.is(exitCalls, 2);
  t.is(startCalls, 2);
  t.is(createdOptions.length, 2);
  t.false(createdOptions[1].autoScroll);
  t.is(createdOptions[1].steps[0].content, 'B');

  unmount();
  cleanup();
});

test('updates steps clone when steps change', async t => {
  const createdSteps = [];
  const client = createClient();
  const testClientFactory = options => {
    createdSteps.push(options.steps);
    return client;
  };

  let rerender;
  act(() => {
    ({rerender} = render(
      <TourGuideManager
        steps={[createStep({content: 'A'})]}
        testClientFactory={testClientFactory}
      />
    ));
  });

  act(() => {
    rerender(
      <TourGuideManager
        steps={[createStep({content: 'B'})]}
        testClientFactory={testClientFactory}
      />
    );
  });
  await flushEffects();

  t.is(createdSteps.length, 2);
  t.is(createdSteps[0][0].content, 'A');
  t.is(createdSteps[1][0].content, 'B');
  cleanup();
});

test('handles null steps and re-clones when steps are provided later', async t => {
  const createdSteps = [];
  const client = createClient();
  const testClientFactory = options => {
    createdSteps.push(options.steps);
    return client;
  };

  let rerender;
  act(() => {
    ({rerender} = render(<TourGuideManager steps={null} testClientFactory={testClientFactory} />));
  });

  act(() => {
    rerender(
      <TourGuideManager
        steps={[createStep({content: 'C'})]}
        testClientFactory={testClientFactory}
      />
    );
  });
  await flushEffects();

  t.is(createdSteps.length, 1);
  t.is(createdSteps[0][0].content, 'C');
  cleanup();
});

test('re-clones steps when target changes', async t => {
  const createdSteps = [];
  const client = createClient();
  const testClientFactory = options => {
    createdSteps.push(options.steps);
    return client;
  };

  let rerender;
  act(() => {
    ({rerender} = render(
      <TourGuideManager
        steps={[createStep({target: '.foo'})]}
        testClientFactory={testClientFactory}
      />
    ));
  });

  act(() => {
    rerender(
      <TourGuideManager
        steps={[createStep({target: '.bar'})]}
        testClientFactory={testClientFactory}
      />
    );
  });
  await flushEffects();

  t.is(createdSteps.length, 2);
  t.is(createdSteps[0][0].target, '.foo');
  t.is(createdSteps[1][0].target, '.bar');
  cleanup();
});

test('re-clones steps when order changes', async t => {
  const createdSteps = [];
  const client = createClient();
  const testClientFactory = options => {
    createdSteps.push(options.steps);
    return client;
  };

  let rerender;
  act(() => {
    ({rerender} = render(
      <TourGuideManager steps={[createStep({order: 1})]} testClientFactory={testClientFactory} />
    ));
  });

  act(() => {
    rerender(
      <TourGuideManager steps={[createStep({order: 2})]} testClientFactory={testClientFactory} />
    );
  });
  await flushEffects();

  t.is(createdSteps.length, 2);
  t.is(createdSteps[0][0].order, 1);
  t.is(createdSteps[1][0].order, 2);
  cleanup();
});

test('autoStart false exits after starting once', async t => {
  let startCalls = 0;
  let exitCalls = 0;
  const client = createClient();
  client.start = () => {
    startCalls += 1;
    client.isVisible = true;
    return Promise.resolve();
  };
  client.exit = () => {
    exitCalls += 1;
    return Promise.resolve();
  };

  const testClientFactory = () => client;
  let rerender;
  act(() => {
    ({rerender} = render(
      <TourGuideManager steps={[createStep()]} autoStart testClientFactory={testClientFactory} />
    ));
  });
  await flushEffects();
  t.is(startCalls, 1);

  act(() => {
    rerender(
      <TourGuideManager
        steps={[createStep()]}
        autoStart={false}
        testClientFactory={testClientFactory}
      />
    );
  });
  await flushEffects();

  t.is(exitCalls, 2);
  cleanup();
});

test('callbacks are wired and exit callback is fired once', async t => {
  const client = createClient();
  const testClientFactory = () => client;
  let stepChangeCount = 0;
  let startCount = 0;
  let exitCount = 0;
  let finishCount = 0;

  act(() => {
    render(
      <TourGuideManager
        steps={[createStep()]}
        autoStart
        group="g"
        onStepChange={index => {
          if (index === 2) stepChangeCount += 1;
        }}
        onStart={() => {
          startCount += 1;
        }}
        onExit={() => {
          exitCount += 1;
        }}
        onFinish={() => {
          finishCount += 1;
        }}
        testClientFactory={testClientFactory}
      />
    );
  });
  await flushEffects();

  client._globalAfterChangeCallback(1, 2);
  client._globalAfterExitCallback();
  client._globalAfterExitCallback();
  client._globalFinishCallback();

  t.is(stepChangeCount, 1);
  t.is(startCount, 1);
  t.is(exitCount, 1);
  t.is(finishCount, 1);
  cleanup();
});

test('cleanup removes dialog/backdrop when not visible without calling exit', async t => {
  let exitCalls = 0;
  let dialogRemoved = 0;
  let backdropRemoved = 0;
  const client = createClient();
  client.exit = () => {
    exitCalls += 1;
    return Promise.resolve();
  };
  client.dialog.remove = () => {
    dialogRemoved += 1;
  };
  client.backdrop.remove = () => {
    backdropRemoved += 1;
  };

  const testClientFactory = () => client;
  const {unmount} = render(
    <TourGuideManager steps={[createStep()]} testClientFactory={testClientFactory} testMode />
  );

  if (__test__.__clientRef) {
    __test__.__clientRef.current = {};
  }
  unmount();
  await flushEffects();
  cleanup();
  t.is(exitCalls, 0);
  t.is(dialogRemoved, 1);
  t.is(backdropRemoved, 1);
});

test('cleanup removes dialog/backdrop and exits when visible', async t => {
  let exitCalls = 0;
  let dialogRemoved = 0;
  let backdropRemoved = 0;
  const client = createClient();
  client.isVisible = true;
  client.exit = () => {
    exitCalls += 1;
    return Promise.resolve();
  };
  client.dialog.remove = () => {
    dialogRemoved += 1;
  };
  client.backdrop.remove = () => {
    backdropRemoved += 1;
  };

  const testClientFactory = () => client;
  let unmount;
  act(() => {
    ({unmount} = render(
      <TourGuideManager steps={[createStep()]} testClientFactory={testClientFactory} />
    ));
  });

  unmount();
  await flushEffects();
  cleanup();
  t.is(exitCalls, 1);
  t.is(dialogRemoved, 1);
  t.is(backdropRemoved, 1);
});
