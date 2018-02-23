import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  loader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

const Loader = ({className}) => {
  return <Text style={styles.loader}>Loading</Text>;
};

Loader.propTypes = {
  className: PropTypes.string
};

export default Loader;
