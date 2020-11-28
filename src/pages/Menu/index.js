import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, SubMenu} from '../../component';

const Menu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.menu}>
        <Text style={styles.titleMenu}>Menu Utama</Text>
        <SubMenu
          titleMenu="Pendaftaran"
          icon="user-plus"
          style={styles.subMenu}
          navigasi={() => navigation.navigate('Jaringan')}
        />
        {/* <SubMenu titleMenu="Pendaftaran" icon="user-plus" style ={styles.subMenu} /> */}
      </View>
      <View style={styles.line} />
      <View style={styles.menu}>
        <Text style={styles.titleMenu}>Mitra</Text>
        <SubMenu titleMenu="Mitra Langsung" icon="users" />
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    height: 'auto',
  },
  menu: {
    padding: 20,
  },
  titleMenu: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  line: {
    borderWidth: 5,
    borderColor: '#e8e8e8',
  },
  subMenu: {
    paddingVertical: 20,
  },
});
