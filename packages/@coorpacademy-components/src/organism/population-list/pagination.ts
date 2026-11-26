import {useCallback, useEffect, useRef} from 'react';
import {ListModel} from './types';

// Viewport effects only. App owns pages, request identity, deduplication and errors.
export const usePopulationPagination = (model: ListModel, disabled: boolean) => {
  const onLoadMore = model.onLoadMore;
  const sentinel = useRef<HTMLDivElement>(null);
  const requested = useRef(false);
  const blocked =
    disabled || model.loading || model.loadingMore || model.transitioning || !model.hasMore;
  useEffect(() => {
    requested.current = false;
  }, [model.rows, model.loadingMore, model.moreError, model.transitioning, disabled]);
  const request = useCallback(() => {
    if (!blocked && !requested.current) {
      requested.current = true;
      onLoadMore();
    }
  }, [blocked, onLoadMore]);
  useEffect(() => {
    if (blocked || model.moreError || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) request();
    });
    // PopulationList always renders this sentinel before effects run.
    observer.observe(sentinel.current as HTMLDivElement);
    return () => observer.disconnect();
  }, [blocked, model.moreError, model.rows, request]);
  return {sentinel, request, blocked: Boolean(blocked)};
};
