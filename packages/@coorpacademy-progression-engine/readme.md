#### initialState n'existe plus, il est calculé dynamiquement selon l'engine

initialStateOptions:
```
export default function createInitialState(
  engine: Engine,
  initialStateOptions: InitialStateOptions
): State
```

createProgression retruns:
```
  return {
    content,
    initialStateOptions,
    state: createInitialState(engine, initialStateOptions),
    actions: [],
    engine
  };
```

formatProgression/updateState devient:
```
updateState(p.engine, createInitialState(p.engine, p.initialStateOptions), p.actions)
```
