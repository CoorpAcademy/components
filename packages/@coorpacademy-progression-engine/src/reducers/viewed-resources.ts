import concat from 'lodash/fp/concat';
import findIndex from 'lodash/fp/findIndex';
import get from 'lodash/fp/get';
import includes from 'lodash/fp/includes';
import {Action, ActionType, Config, ContentResourceViewedAction, ViewedResource} from '../types';

export default function viewedResources(config: Config) {
  return (currentViewedResources: ViewedResource[] = [], action: Action): ViewedResource[] => {
    switch (action.type) {
      case 'resource': {
        const contentRef = action.payload.content.ref;
        const contentType = action.payload.content.type;
        const resourceRef = action.payload.resource.ref;
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

        const contentResources: string[] = get('resources', currentViewedResources[contentIndex]);
        const resourceAlreadyViewed = includes(resourceRef, contentResources);

        if (resourceAlreadyViewed) return currentViewedResources;

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
