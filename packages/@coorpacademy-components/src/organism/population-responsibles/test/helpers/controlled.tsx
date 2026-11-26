import React, {useEffect, useRef, useState} from 'react';
import PopulationResponsibles from '../..';
import {
  makeModel,
  managerPages,
  responsibleLabels
} from '../../../../test/helpers/population-responsibles';

// Synthetic App coordination only. No business state is owned by the production component.
const ControlledResponsibles = ({failFirstPage = false}: {failFirstPage?: boolean}) => {
  const [visible, setVisible] = useState(25);
  const [pending, setPending] = useState<'more' | 'refresh' | undefined>();
  const [failed, setFailed] = useState(false);
  const [failNext, setFailNext] = useState(failFirstPage);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const loadMore = () => {
    setFailed(false);
    setPending('more');
    timer.current = setTimeout(() => {
      setPending(undefined);
      if (failNext) {
        setFailed(true);
        setFailNext(false);
      } else {
        setVisible(count => Math.min(count + 25, managerPages.length));
      }
    }, 600);
  };
  const refresh = () => {
    setFailed(false);
    setPending('refresh');
    timer.current = setTimeout(() => {
      setVisible(25);
      setPending(undefined);
    }, 600);
  };

  return (
    <PopulationResponsibles
      labels={responsibleLabels}
      model={makeModel({
        users: managerPages.slice(0, visible),
        countLabel: `${visible} of ${managerPages.length} managers`,
        loading: pending === 'refresh',
        loadingMore: pending === 'more',
        refresh: {label: 'Refresh', onClick: refresh},
        loadMore:
          visible < managerPages.length ? {label: 'Load more', onClick: loadMore} : undefined,
        error: failed
          ? {
              message: 'The next managers could not be loaded. Your current list is kept.',
              retry: {label: 'Try again', onClick: loadMore}
            }
          : undefined
      })}
    />
  );
};

export default ControlledResponsibles;
