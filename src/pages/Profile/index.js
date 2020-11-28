import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {promo} from '../../assets';
import {Header} from '../../component';
import {colors} from '../../utils/colors';
import {Input} from '../../component/Input';
import ButtonCustom from '../../component/ButtonCustom';
import Axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

const Profile = () => {
  const userReducer = useSelector((state) => state.UserReducer.data);
  console.log(userReducer);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.textProfile}>Profile</Text>
          <View style={styles.contentProfile}>
            <Image source={promo} style={styles.image} />
            <View style={styles.contentDetail}>
              <Text style={styles.textDetail}>{userReducer.namaLengkap}</Text>
              <Text style={styles.textDetail}>
                ALamat : {userReducer.alamat}
              </Text>
              <Text style={styles.textDetail}>No Hp : {userReducer.phone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.content}>
          <Text style={styles.textProfile}>Barcode</Text>
          <View style={styles.contentProfile}>
            <View style={styles.barcode} />
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.content}>
          <Text style={styles.textProfile}>Ubah Profile</Text>
          <Image source={promo} style={styles.image} />
          <View style={styles.form}>
            <Input
              placeholder="Nama Lengkap"
              titlelabel="Nama Lengkap"
              value={userReducer.namaLengkap}
            />
            {/* <Input
              placeholder="Password"
              secureTextEntry={true}
              titlelabel="Paasword"
              value= {userReducer.password}
            /> */}
            {/* <Input
              placeholder="Confirm Password"
              secureTextEntry={true}
              titlelabel="Confirm Password"
            /> */}
            <Input
              placeholder="Email"
              keyboardType="email-address"
              titlelabel="Email"
              value={userReducer.email}
            />
            <Input
              placeholder="Phone Number"
              keyboardType="numeric"
              titlelabel="Phone Number"
              value={userReducer.phone}
            />
            <Input
              multiline={true}
              numberOfLines={4}
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
              titlelabel="Alamat"
              value={userReducer.alamat}
            />
            <ButtonCustom style={styles.button} name="Simpan" />
          </View>
        </View>
        <View style={styles.line} />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 20,
    // flexDirection : 'row'
  },
  textProfile: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  contentProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-end',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  contentDetail: {
    justifyContent: 'center',
    position: 'relative',
    // flexWrap : "wrap",
  },
  textDetail: {
    fontSize: 12,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  line: {
    marginTop: 10,
    borderColor: colors.disable,
    borderWidth: 4,
  },
  barcode: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
  form: {
    marginTop: 20,
  },
});
