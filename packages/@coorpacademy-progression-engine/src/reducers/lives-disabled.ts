import {Action, Config} from '../types';

export default function livesDisabled(config: Config) {
  return (state: boolean | void, action: Action): boolean => {
    return config.livesDisabled;
  };
}
