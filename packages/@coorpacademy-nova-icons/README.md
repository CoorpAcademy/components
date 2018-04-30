# nova-icons

Components bank based on nova svg icons

## Adding an icon
- find your `.svg` path within `/third-party` and add the path within `icons.json`.
- generate the `.js`
```
npm run prepare
```
- by now your js file should be added within `/solid`, `/composition` or `/line` depending on your svg path.

## Usage

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Beard from 'nova-icons/solid/beauty-and-spa/beard';
import Hat from 'nova-icons/solid/clothes/hat-1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Beard width={100} height={100} />
        <Hat width={100} height={100} />
      </div>
    );
  }
}

export default App;
```
