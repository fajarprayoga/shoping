import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../utils/colors';

export default function ButtonCustom({name, onpressProp}) {
  return (
    <View style={styles.button}>
      <TouchableOpacity style={styles.btnBorder} onPress={onpressProp}>
        <Text style={styles.btnText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnBorder: {
    alignItems: 'center',
    // marginBottom : 50,
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: colors.default,
    borderColor: colors.default,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});
