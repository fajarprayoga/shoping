import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {colors} from '../../utils/colors';
import {Input} from '../../component/Input';
import ButtonCustom from '../../component/ButtonCustom';
import Axios from 'axios';

const Register = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  //data
  const [form, setForm] = useState({
    namaLengkap: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    alamat: '',
    namaBank: '',
    namaPemilik: '',
    nomorBank: '',
  });

  const login = () => {
    navigation.navigate('Login');
  };

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const SendData = () => {
    // console.log(registerReducer.form)
    if (form.password === form.confirmPassword) {
      Axios.post('http://10.0.2.2:3004/users', form);
      Alert.alert('Terimakasih silahkan lanjutkan untuk login');
    } else {
      Alert.alert('password anda salah');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={login}>
          <Icon name="arrow-left" style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.textJoin}>Join again</Text>
      </View>
      <ScrollView style={styles.batasBawah}>
        <View style={styles.form}>
          <Text style={styles.textTitle}>Daftar Sekarang</Text>
          <View style={styles.login}>
            <Text style={styles.textLogin}>Sudah Punya Akun ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textMasuk}>Masuk </Text>
            </TouchableOpacity>
          </View>
          <Input
            placeholder="Nama Lengkap"
            titlelabel="Nama Lengkap"
            value={form.namaLengkap}
            onChangeText={(value) => onInputChange(value, 'namaLengkap')}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            titlelabel="Paasword"
            value={form.password}
            onChangeText={(value) => onInputChange(value, 'password')}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            titlelabel="Confirm Password"
            value={form.confirmPassword}
            onChangeText={(value) => onInputChange(value, 'confirmPassword')}
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            titlelabel="Email"
            value={form.email}
            onChangeText={(value) => onInputChange(value, 'email')}
          />
          <Input
            placeholder="Phone Number"
            keyboardType="numeric"
            titlelabel="Phone Number"
            value={form.phone}
            onChangeText={(value) => onInputChange(value, 'phone')}
          />
          <Input
            multiline={true}
            numberOfLines={4}
            // onChangeText={(text) => this.setState({text})}
            // value={this.state.text}
            titlelabel="Alamat"
            value={form.alamat}
            onChangeText={(value) => onInputChange(value, 'alamat')}
          />
        </View>
        {/* <SelectPicker /> */}
        <View style={styles.form}>
          <Text style={styles.textBank}>Informasi Bank</Text>
          <Input
            placeholder="Nama Bank"
            titlelabel="Nama Bank"
            value={form.namaBank}
            onChangeText={(value) => onInputChange(value, 'namaBank')}
          />
          <Input
            placeholder="Nama Pemilik"
            titlelabel="Nama Pemilik"
            value={form.namaPemilik}
            onChangeText={(value) => onInputChange(value, 'namaPemilik')}
          />
          <Input
            placeholder="Nomor Bank"
            keyboardType="numeric"
            titlelabel="Nomor Bank"
            value={form.nomorBank}
            onChangeText={(value) => onInputChange(value, 'nomorBank')}
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(value) => setToggleCheckBox(value)}
            />
            <Text style={styles.label}>
              Saya Setuju dengan{' '}
              <Text style={styles.subText}>Syarat dan Ketentuan</Text> serta{' '}
              <Text style={styles.subText}>kebijakan Privasi</Text>{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.kotakButton}>
        {toggleCheckBox ? (
          <TouchableOpacity style={styles.btnBorder} onPress={SendData}>
            <Text style={styles.btnText}>Daftar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.btnBorderFalse}
            onPress={SendData}
            disabled>
            <Text style={styles.btnText}>Daftar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ec524b',
  },
  iconBack: {
    color: 'white',
    fontSize: 15,
  },
  textJoin: {
    marginLeft: 20,
    fontSize: 15,
    color: 'white',
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
  checkboxContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  subText: {
    color: '#28abb9',
    fontWeight: 'bold',
  },
  kotakButton: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  btnBorder: {
    alignItems: 'center',
    // marginBottom : 50,
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: colors.default,
    borderColor: colors.default,
  },
  btnBorderFalse: {
    alignItems: 'center',
    // marginBottom : 50,
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: colors.disable,
    borderColor: colors.dark,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});
