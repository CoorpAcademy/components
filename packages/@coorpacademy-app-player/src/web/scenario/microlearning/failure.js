const runScenario = async engine => {
  await engine.clickSlideValidationButton();
  await engine.checkPopinHeaderShowFailure();
};

export default runScenario;
