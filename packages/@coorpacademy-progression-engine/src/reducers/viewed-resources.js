// @flow

import concat from 'lodash/fp/concat';
import findIndex from 'lodash/fp/findIndex';
import get from 'lodash/fp/get';
import includes from 'lodash/fp/includes';
import type {Action, Config, ContentResourceViewedAction, ViewedResource} from '../types';

export default function viewedResources(
  config: Config
): (Array<ViewedResource>, Action) => Array<ViewedResource> {
  return (
    currentViewedResources: Array<ViewedResource> = [],
    action: Action
  ): Array<ViewedResource> => {
    switch (action.type) {
      case 'resource': {
        const resourceViewAction = (action: ContentResourceViewedAction);
        const contentRef = resourceViewAction.payload.content.ref;
        const contentType = resourceViewAction.payload.content.type;
        const resourceRef = resourceViewAction.payload.resource.ref;
        const contentIndex = findIndex({ref: contentRef}, currentViewedResources);

        if (contentIndex === -1) {
          return concat(currentViewedResources)([
            {
              ref: contentRef,
              type: contentType,

              resources: [resourceRef]
            }
          ]);
        }

        const contentResources: Array<string> = get(
          'resources',
          currentViewedResources[contentIndex]
        );
        const resourceAlreadyViewed = includes(resourceRef, contentResources);

        if (resourceAlreadyViewed) return currentViewedResources;
        // return currentViewedResources, contentIndex, resourceRef;
        const newViewedResources = [...currentViewedResources];
        newViewedResources[contentIndex] = {
          ...newViewedResources[contentIndex],
          resources: concat(newViewedResources[contentIndex].resources, [resourceRef])
        };
        return newViewedResources;
      }
      default:
        return currentViewedResources;
    }
  };
}
