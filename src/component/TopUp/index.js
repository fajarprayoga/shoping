import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';

const TopUp = ({name, icon}) => {
  return (
    <TouchableOpacity>
      <View style={styles.topUp}>
        <Icon name={icon} style={styles.icon} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  topUp: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    color: '#af2d2d',
  },
  text: {
    marginTop: 2,
    fontSize: 13,
    color: '#ec524b',
  },
});
