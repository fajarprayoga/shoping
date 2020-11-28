import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {colors} from '../../utils/colors';

const Prodcuct = () => {
  return (
    <View>
      <Text>roduct</Text>
    </View>
  );
};

const DashboardProduct = ({nameImage, textTitle, textContent, navigasi}) => {
  return (
    <View style={styles.container}>
      <Image source={nameImage} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.textTitle}>{textTitle}</Text>
        <Text style={styles.textContent}>{textContent}</Text>
      </View>
      <TouchableOpacity onPress={navigasi}>
        <Text style={styles.button}>Lihat Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export {DashboardProduct, Prodcuct};

const styles = StyleSheet.create({
  container: {
    // backgroundColor : 'red',
    width: 155,
    height: 250,
    borderRadius: 15,
    // padding : 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.disable,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    // elevation: 1,
    paddingBottom: 15,
  },
  image: {
    width: 155,
    height: 80,
    resizeMode: 'stretch',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  content: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flex: 3,
  },
  textTitle: {
    color: colors.text.grey,
    fontWeight: 'bold',
    fontSize: 15,
  },
  textContent: {
    marginTop: 10,
    color: colors.text.grey,
    overflow: 'hidden',
  },
  button: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.default,
    fontSize: 15,
  },
});
