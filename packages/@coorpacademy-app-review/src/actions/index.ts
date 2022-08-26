import {navigateBack, navigateTo} from './ui/navigation';

export type Dispatchers = {
  navigateTo: typeof navigateTo;
  navigateBack: typeof navigateBack;
};
