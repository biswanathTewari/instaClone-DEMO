import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';

const ActivityCount = ({title, count, onPress}) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>{count}</Text> {title}
      </Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ActivityCount;
