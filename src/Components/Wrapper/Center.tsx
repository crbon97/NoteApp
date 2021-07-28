import React from 'react';
import {StyleSheet, View} from 'react-native';

const Center: React.FC<{}> = ({children}) => {
  return <View style={Styles.Wrapper}>{children}</View>;
};

const Styles = StyleSheet.create({
  Wrapper: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default Center;
