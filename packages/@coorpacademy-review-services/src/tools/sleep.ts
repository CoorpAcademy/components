export const sleep = (msToSleep: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, msToSleep);
  });
