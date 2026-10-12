# Coorpacademy web player

- freerun
- learner
- battles

## local dev

- npm install
- npm start

## End popin overrides

Pass `popinEnd` to `create` to replace the recommendation heading or the header CTA:

```js
popinEnd: {
  recommendationTitle: 'More to explore:',
  headerCta: {title: 'Open my learning plan', onClick: openLearningPlan}
}
```

`popinEnd` can also be a function. It receives `{recommendations, recommendationContext,
exitNode, recommendationTitle, headerCta}` and returns the same override object, or nothing to
keep the default behavior. `headerCta` can contain only `title` to keep the current
click action. Providing `onClick` or `href` replaces that action, while keeping the
current title unless another one is provided. Without overrides, the existing heading,
header CTA and footer behavior are unchanged.

`Recommendations.find` may return either an array of cards or `{cards, context}`. The
optional context is passed to `popinEnd` as `recommendationContext` and is never added
to individual cards. Existing integrations returning an array keep their behavior.
