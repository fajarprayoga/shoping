import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../utils/colors';

const TabItem = ({onLongPress, onPress, isFocused, label}) => {
  const IconTab = ({color}) => {
    color = colors.dark;
    if (label === 'Dashboard') {
      return isFocused ? (
        <Icon name="home" color={colors.default} style={styles.iconTab} />
      ) : (
        <Icon name="home" style={styles.iconTab} color={color} />
      );
    }

    if (label === 'Keranjang') {
      return isFocused ? (
        <Icon
          name="shopping-basket"
          color={colors.default}
          style={styles.iconTab}
        />
      ) : (
        <Icon name="shopping-basket" style={styles.iconTab} color={color} />
      );
    }
    if (label === 'Menu') {
      return isFocused ? (
        <Icon name="globe" color={colors.default} style={styles.iconTab} />
      ) : (
        <Icon name="globe" style={styles.iconTab} color={color} />
      );
    }
    if (label === 'Profile') {
      return isFocused ? (
        <Icon name="user" color={colors.default} style={styles.iconTab} />
      ) : (
        <Icon name="user" style={styles.iconTab} color={color} />
      );
    }
    if (label === 'Scan') {
      return isFocused ? (
        <View style={styles.borderScan}>
          <Icon name="qrcode" color={colors.default} style={styles.scan} />
        </View>
      ) : (
        <View style={styles.borderScan}>
          <Icon name="qrcode" style={styles.scan} color={color} />
        </View>
      );
    }
    return <Icon name="home" color={colors.default} style={styles.iconTab} />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabItem}>
      <IconTab />
      <Text
        style={{
          color: isFocused ? '#ec524b' : '#222',
          bottom: label === 'Scan' ? 15 : 0,
          fontWeight: 'bold',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  tabItem: {
    // paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTab: {
    fontSize: 25,
  },
  borderScan: {
    borderWidth: 2,
    alignItems: 'center',
    bottom: 20,
    borderRadius: 50,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderColor: '#f1f3f8',
  },
  scan: {
    fontSize: 40,
    // bottom : 30,
    textAlign: 'center',
    // alignItems : 'center'
  },
});
