import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Header} from '../../component';
import ButtonCustom from '../../component/ButtonCustom';
import {Input} from '../../component/Input';
import {colors} from '../../utils/colors';
const Jaringan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.batasBawah}>
        <View style={styles.form}>
          <Text style={styles.textTitle}>Daftar Sekarang</Text>
          <View style={styles.login}>
            <Text style={styles.textLogin}>Sudah Punya Akun ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textMasuk}>Masuk </Text>
            </TouchableOpacity>
          </View>
          <Input placeholder="Nama Lengkap" titlelabel="Nama Lengkap" />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            titlelabel="Paasword"
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            titlelabel="Confirm Password"
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            titlelabel="Email"
          />
          <Input
            placeholder="Phone Number"
            keyboardType="numeric"
            titlelabel="Phone Number"
          />
          <Input
            multiline={true}
            numberOfLines={4}
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
            titlelabel="Alamat"
          />
        </View>
        {/* <SelectPicker /> */}
        <View style={styles.form}>
          <Text style={styles.textBank}>Informasi Bank</Text>
          <Input placeholder="Nama Bank" titlelabel="Nama Bank" />
          <Input placeholder="Nama Pemilik" titlelabel="Nama Pemilik" />
          <Input
            placeholder="Nomor Bank"
            keyboardType="numeric"
            titlelabel="Nomor Bank"
          />
          <ButtonCustom style={styles.button} name="Daftar" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Jaringan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingBottom: 10,
  },
  form: {
    paddingHorizontal: 30,
    marginTop: 25,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  },
  login: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  textLogin: {
    letterSpacing: 2,
    color: colors.dark,
  },
  textMasuk: {
    color: colors.default,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  titlelabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  selectPicker: {
    marginVertical: 10,
  },
  pickerBorder: {
    borderBottomWidth: 1,
    borderColor: colors.default,
    marginVertical: 20,
  },
  containerPicker: {
    marginHorizontal: 30,
  },
  textBank: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  // D:\dev\RNTest\node_modules\@react-native-picker\picker\windows\ReactNativePicker\ReactNativePicker.vcxproj
});
