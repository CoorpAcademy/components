# racing progression + app architecture

https://www.lucidchart.com/documents/edit/279dfa79-9170-4b82-8586-465929c3b4e5

## IMPACTS

### api-progression

https://github.com/CoorpAcademy/api-progression/pull/192

- model progression.engineOptions.goal
- model action.authors
- model SetupSchema --> racing-setup Action
- ISSUE : POST answers body = payload, authors added to body for now, should we split {authors, payload} = body

```
  progression.actions.push({
    type: 'answer',
    authors: body.authors,
    payload: body
  });
```

--> note about dynamical properties for maps https://github.com/Automattic/mongoose/issues/681

#### issues

##### progression ownership

`progression.userId : string` should become `progression.owners : [String]`.

for now for racing progressions `isOwner()` checks userId within `action(type: 'racing-setup').authors`

### progression-engine

- action.author
- reducers
  state.users:

```
const _reducers = {
  questionNum,
  content,
  allAnswers,
  isCorrect,
  nextContent,
  slides,
  id: config => identity,
  team: config => identity
};
```

- config.infiniteSlides: boolean --> to restart slides picking

### mooc --> team-builder

- rooms admin/join/play
- integrates @coorpacademy/app-racing
- proposal `skin {common, racing:{primary}}`

### @coorpacademy/app-racing

https://github.com/CoorpAcademy/components/pull/1226

- `/store/services` have been moved to `/sandbox-web/services`
- service.users
- fetchMe()
- react-motion

<details>
  <summary>front progression</summary>

```json
{
  "userId": "5aec6064e180bb54a19a4baa",
  "content": {
    "ref": "5.C",
    "type": "level",
    "version": "1"
  },
  "_id": "5aec6da4bb01de7b9f2f82fc",
  "meta": {
    "updatedAt": "2018-05-04T14:26:44.975Z",
    "createdAt": "2018-05-04T14:26:44.961Z"
  },
  "engineOptions": {
    "goal": 15
  },
  "engine": {
    "ref": "racing",
    "version": "1"
  },
  "state": {
    "teams": {
      "0": {
        "players": ["000000000000000000000509"],
        "tower": ["placed", "placed"]
      },
      "1": {
        "players": ["000000000000000000000346"],
        "tower": ["removed", "placed", "placed", "placed"]
      }
    },
    "users": {
      "000000000000000000000346": {
        "questionNum": 1,
        "allAnswers": [],
        "isCorrect": true,
        "nextContent": {
          "ref": "5.C1.4",
          "type": "slide"
        },
        "slides": [],
        "id": "000000000000000000000346"
      },
      "000000000000000000000509": {
        "questionNum": 1,
        "allAnswers": [],
        "isCorrect": true,
        "nextContent": {
          "ref": "5.C1.7",
          "type": "slide"
        },
        "slides": [],
        "id": "000000000000000000000509"
      }
    }
  }
}
```

</details>

<details>
  <summary>progression.state.teams to ui.races</summary>

```json
"ui": {
  "races": {
    "entities": {
      "5aec6da4bb01de7b9f2f82fc": {
        "display": [
          [
            "placed",
            "placed"
          ],
          [
            "removed",
            "placed",
            "placed",
            "placed"
          ]
        ]
      }
    }
  }
}
```

</details>

## install

```
[api-progression] git checkout app-racing
[lerna] git checkout app-racing
[mooc] git checkout app-racing

[mooc] yarn link @coorpacademy/app-racing
[mooc] yarn link @coorpacademy/components
[mooc] yarn link @coorpacademy/progression-engine

[api-progression] yarn link @coorpacademy/progression-engine
```

## build

```
[@coorpacademy-progression-engine] npm run build
```

- may require `pkill flow`
- used by $mooc/core/lib/engine/\*
- used by $api-progression/app/lib/progressions.js

```
[@coorpacademy-components] npm run build:es
[@coorpacademy-app-racing] npm run build:es
[mooc] npm run build:front
```

## run

```
[mooc] docker-compose up -d
[mooc] docker-compose stop progression

[api-progression] node app/index.js
[mooc] PORT=3000 NODE_ENV=development node core/web.js
```
