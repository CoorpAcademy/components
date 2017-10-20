const createDataNameSelector = dataName => `[data-name="${dataName}"]`;

const select = page => async selector => {
  await page.waitFor(selector);
  return page.mainFrame().$(selector);
};

const getAttribute = page => async (dataName, attributeName) => {
  const selector = createDataNameSelector(dataName);

  await page.waitFor(selector);
  return page.$eval(selector, el => el.getAttribute(attributeName));
};

const clickSlideValidationButton = page => async () => {
  const validationButton = await selectDataName(page)('validateAnswerCTA');

  return validationButton.click();
};

const checkPopinHeaderShowFailure = (page, t) => async () => {
  const state = await getAttribute('popinHeader', 'data-state');

  return t.id(state, 'fail');
};

const createEngine = (page, t) => ({
  clickSlideValidationButton: clickSlideValidationButton(page, t),
  checkPopinHeaderShowFailure: checkPopinHeaderShowFailure(page, t)
});

export default createEngine;
