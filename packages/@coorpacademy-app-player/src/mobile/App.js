/**
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {selectMapStateToVNode} from '../store/view';
import * as Services from '../store/services';
import start from '../store/start';
import createStore from '../store';
import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';

export const createStateToVNode = (template, mapStateToProps) => pipe(mapStateToProps, identity);

export const views = {
  loading: null,
  player: null,
  popinEnd: null,
  popinCorrection: null
};

const options = {
  translate: identity,
  skin: {
    common: {
      primary: '#007bb3'
    }
  },
  services: Services,
  progression: 'level1'
};

// const createUpdate = (container, store, options) => {
//   const {getState} = store;
//   const mapStateToVNode = selectMapStateToVNode(options, store, views, createStateToVNode);

//   return () => {
//     const state = getState();
//     const view = mapStateToView(state);
//   };
// };

export default class App extends Component<{}> {
  constructor() {
    super();
    this.store = createStore(options);
    // let update = createUpdate(container, store, options);
    // let unsubscribe = store.subscribe(update);
    start(options, this.store);
  }

  componentDidMount() {
    this.store.subscribe(() => this.setState(() => ({})));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {JSON.stringify(this.store.getState(), null, 2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
