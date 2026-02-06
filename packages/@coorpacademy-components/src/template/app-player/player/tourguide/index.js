import {useEffect, useMemo, useRef} from 'react';
import PropTypes from 'prop-types';
import {identity, isFunction, isObject, isString, join, keys, map, pipe, sortBy} from 'lodash/fp';
import {TourGuideClient} from '@sjmc11/tourguidejs';
import './style.css';

// Fixed class used to attach our CSS customizations to the TourGuide dialog.
const TOURGUIDE_DIALOG_CLASS = 'coorp-tourguide-dialog';

// Normalize step content for stable serialization:
// - keep strings as-is
// - allow objects with a custom toString
// - otherwise fall back to empty string
const normalizeStepContent = content => {
  if (isString(content)) {
    return content;
  }

  if (isObject(content) && isFunction(content?.toString)) {
    if (content.toString === Object.prototype.toString) {
      return '';
    }
    return content.toString();
  }

  return '';
};

// Build a deterministic key for steps to avoid re-init on referential changes only.
// We include target/order/group/content so a real content change triggers a re-init.
const serializeSteps = steps =>
  pipe(
    map(
      step =>
        `${step.target || ''}|${step.order ?? ''}|${step.group || ''}|${normalizeStepContent(
          step.content
        )}`
    ),
    join(';;')
  )(steps || []);

// Same idea for options: stable key for effect dependencies.
// Sorting keys ensures we don't recreate the client due to object key ordering.
const serializeOptions = options =>
  pipe(
    keys,
    sortBy(identity),
    map(key => `${key}:${String(options[key])}`),
    join('|')
  )(options || {});

export const shouldStartTour = (autoStart, group, client) => autoStart && !client.isFinished(group);

// Test-only hooks for unit tests (not used in production code).
export const __test__ = {
  normalizeStepContent,
  serializeSteps,
  serializeOptions,
  TOURGUIDE_DIALOG_CLASS,
  shouldStartTour
};

export const TourGuideStepPropType = PropTypes.shape({
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  order: PropTypes.number,
  group: PropTypes.string,
  position: PropTypes.string,
  fixed: PropTypes.bool,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      type: PropTypes.string
    })
  )
});

export const TourGuideOptionsPropType = PropTypes.shape({
  autoScroll: PropTypes.bool,
  autoScrollSmooth: PropTypes.bool,
  autoScrollOffset: PropTypes.number,
  backdropAnimate: PropTypes.bool,
  backdropClass: PropTypes.string,
  backdropColor: PropTypes.string,
  dialogAnimate: PropTypes.string,
  dialogZ: PropTypes.number,
  dialogWidth: PropTypes.number,
  dialogMaxWidth: PropTypes.number,
  dialogPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  targetPadding: PropTypes.number,
  hideNext: PropTypes.bool,
  hidePrev: PropTypes.bool,
  nextLabel: PropTypes.string,
  prevLabel: PropTypes.string,
  finishLabel: PropTypes.string,
  completeOnFinish: PropTypes.bool,
  exitOnEscape: PropTypes.bool,
  exitOnClickOutside: PropTypes.bool,
  keyboardControls: PropTypes.bool,
  showStepDots: PropTypes.bool,
  stepDotsPlacement: PropTypes.oneOf(['footer', 'body']),
  showButtons: PropTypes.bool,
  showStepProgress: PropTypes.bool,
  progressBar: PropTypes.string,
  closeButton: PropTypes.bool,
  rememberStep: PropTypes.bool,
  propagateEvents: PropTypes.bool,
  debug: PropTypes.bool
});

export const TourGuideConfigPropType = PropTypes.shape({
  steps: PropTypes.arrayOf(TourGuideStepPropType).isRequired,
  options: TourGuideOptionsPropType,
  group: PropTypes.string,
  autoStart: PropTypes.bool
});

// TourGuideManager is a React-only controller:
// - creates/destroys the TourGuide client
// - starts the tour when allowed
// - cleans up DOM nodes left by the library
const TourGuideManager = ({
  steps = [],
  options = {},
  group,
  autoStart = true,
  forceStart = false,
  startStep,
  onStepChange,
  onExit,
  onFinish,
  // Unit-test injection point to avoid using the real TourGuideClient.
  testClientFactory
}) => {
  const clientRef = useRef(null);
  // Expose refs for unit tests without relying on globals.
  const runtimeProcess = (() => {
    try {
      return new Function('return this')().process;
    } catch (error) {
      return undefined;
    }
  })();
  if (runtimeProcess?.env?.NODE_ENV === 'test') {
    __test__.__clientRef = clientRef;
  }
  const hasStartedRef = useRef(false);
  const hasExitedRef = useRef(false);
  const startStepRef = useRef(startStep);
  const onStepChangeRef = useRef(onStepChange);
  const onExitRef = useRef(onExit);
  const onFinishRef = useRef(onFinish);
  const sanitizedOptions = useMemo(() => {
    // We control dialogClass internally; don't let external props override it.
    const cleanOptions = {...options};
    delete cleanOptions.dialogClass;
    return cleanOptions;
  }, [options]);
  const optionsKey = serializeOptions(sanitizedOptions);
  const sanitizedOptionsRef = useRef({key: optionsKey, value: sanitizedOptions});
  if (sanitizedOptionsRef.current.key !== optionsKey) {
    sanitizedOptionsRef.current = {key: optionsKey, value: sanitizedOptions};
  }
  const stableOptions = sanitizedOptionsRef.current.value;
  const stepsKey = serializeSteps(steps);
  // Clone steps because TourGuideJS mutates targets (string -> HTMLElement).
  // Use stepsKey so we only re-clone when the actual content changes.
  const stepsForClientRef = useRef({key: stepsKey, value: (steps || []).map(step => ({...step}))});
  if (stepsForClientRef.current.key !== stepsKey) {
    stepsForClientRef.current = {key: stepsKey, value: (steps || []).map(step => ({...step}))};
  }
  const stepsForClient = stepsForClientRef.current.value;

  useEffect(() => {
    startStepRef.current = startStep;
    onStepChangeRef.current = onStepChange;
    onExitRef.current = onExit;
    onFinishRef.current = onFinish;
  }, [startStep, onStepChange, onExit, onFinish]);

  useEffect(() => {
    // Avoid client creation on the server or with empty steps.
    if (typeof window === 'undefined' || stepsForClient.length === 0) {
      return undefined;
    }
    if (!TourGuideClient && !testClientFactory) {
      return undefined;
    }
    const createClient =
      testClientFactory ||
      (clientOptions => {
        return new TourGuideClient(clientOptions);
      });
    // Create a fresh client when steps/options change and apply our fixed dialog class.
    const client = createClient({
      steps: stepsForClient,
      ...stableOptions,
      dialogClass: TOURGUIDE_DIALOG_CLASS
    });

    clientRef.current = client;
    hasStartedRef.current = false;
    hasExitedRef.current = false;
    if (typeof startStepRef.current === 'number' && startStepRef.current >= 0) {
      client.activeStep = startStepRef.current;
    }
    client._globalAfterChangeCallback = (currentStepIndex, nextStepIndex) => {
      if (onStepChangeRef.current) {
        onStepChangeRef.current(nextStepIndex);
      }
    };
    client._globalAfterExitCallback = () => {
      if (hasExitedRef.current) {
        return;
      }
      hasExitedRef.current = true;
      if (onExitRef.current) {
        onExitRef.current();
      }
    };
    client._globalFinishCallback = () => {
      if (onFinishRef.current) {
        onFinishRef.current();
      }
    };

    return () => {
      // Ensure old DOM nodes are removed; TourGuideJS uses fixed IDs
      // and can otherwise leave stale elements behind.
      const exitPromise = client.isVisible ? client.exit().catch(() => {}) : Promise.resolve();
      exitPromise
        .finally(() => {
          client.dialog?.remove();
          client.backdrop?.remove();
        })
        .catch(() => {});
      if (clientRef.current === client) {
        clientRef.current = null;
      }
    };
  }, [stepsKey, optionsKey, stepsForClient, stableOptions, testClientFactory]);

  useEffect(() => {
    const client = clientRef.current;
    if (!client) {
      return undefined;
    }

    if (autoStart) {
      // Don't restart a tour that was already completed for this group unless explicitly allowed.
      if (!forceStart && group && client.isFinished && client.isFinished(group)) {
        return undefined;
      }
      if (hasStartedRef.current) {
        hasStartedRef.current = false;
        client.exit().catch(() => {});
      }
      const start = () => {
        // Mark as started before calling into the library to avoid double-start.
        hasStartedRef.current = true;
        client.start(group).catch(() => {});
      };
      start();
    } else if (!autoStart && hasStartedRef.current) {
      hasStartedRef.current = false;
      client.exit().catch(() => {});
    }

    return undefined;
  }, [autoStart, forceStart, group, stepsKey, optionsKey]);

  return null;
};

TourGuideManager.propTypes = {
  steps: PropTypes.arrayOf(TourGuideStepPropType),
  options: TourGuideOptionsPropType,
  group: PropTypes.string,
  autoStart: PropTypes.bool,
  forceStart: PropTypes.bool,
  startStep: PropTypes.number,
  onStepChange: PropTypes.func,
  onExit: PropTypes.func,
  onFinish: PropTypes.func,
  testClientFactory: PropTypes.func
};

export default TourGuideManager;
