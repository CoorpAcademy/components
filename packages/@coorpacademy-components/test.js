const Header = props => (
  <AnimationOrchestrator>
    <AnimationAgent id="start-icon">
      <StarIcon />
    </AnimationAgent>
    <AnimationAgent id="start-label" after="start-icon">
      <Star />
    </AnimationAgent>
    <AnimationAgent id="rank-icon" after="start-label">
      <RankIcon />
    </AnimationAgent>
    <AnimationAgent id="rank-label" after="rank-icon">
      <Rank />
    </AnimationAgent>
  </AnimationOrchestrator>
);

const StarIcon = props => (
  <Animated class={style.animation}>
    <div />
  </Animated>
);
