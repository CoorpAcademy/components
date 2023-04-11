import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const ReceiveEmail = props => {
  const {locales} = props;

  return (
    <View style={styles.container} testID="receive-email">
      <Text>receive email</Text>
    </View>
  );
};

export default ReceiveEmail;
