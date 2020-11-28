import React, {useEffect, useReducer, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {background} from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';
import Axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
// import { setDataUser } from '../../redux';

const Login = ({navigation}) => {
  useEffect(() => {
    getData();
  }, []);

  //state variabel

  const userReducer = useSelector((state) => state.UserReducer);

  // const registerReducer = useSelector((state) => state.RegisterReducer);
  const dispatch = useDispatch();
  const [users, setUsers] = useState({});
  const [noHp, setNoHp] = useState('');
  // const [loading, setLoading] = useState(true);

  // state function
  const userLogin = () => {
    // console.log('ini users',users)
    users.map((user) => {
      if (user.phone === noHp) {
        dispatch({type: 'SET_DATA_USER', value: user});
        navigation.replace('MainApp');
      }
    });
  };
  const register = () => {
    navigation.navigate('Register');
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then(async (result) => {
      console.log('result : ', result.data);
      await setUsers(result.data); //simpan nilai ke state users
      // setLoading(false)
    });
  };

  // if(loading){
  //   return <Text>hahahaha</Text>
  // }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
        <Text style={styles.text}>Minyak Belog</Text>
        <View style={styles.form}>
          <View style={styles.login}>
            <Icon name="user" size={30} color="white" style={styles.icon} />
            <TextInput
              keyboardType="numeric"
              placeholder="Nomor Ponsel"
              style={styles.textLogin}
              placeholderTextColor="white"
              onChangeText={(value) => setNoHp(value)}
            />
          </View>
          <TouchableOpacity style={styles.btnBorder} onPress={userLogin}>
            <Text style={styles.btnText}>SIGN IN</Text>
          </TouchableOpacity>
          <View style={styles.line}>
            <View style={styles.lineStyle} />
            <Text style={styles.textLine}>ATAU</Text>
            <View style={styles.lineStyle} />
          </View>
          <TouchableOpacity style={styles.btnBorderJoin} onPress={register}>
            <Text style={styles.btnText}>JOIN NOW</Text>
          </TouchableOpacity>
          <View style={styles.bantuan}>
            <Icon name="flag" size={30} color="#0e918c" style={styles.icon} />
            <Text style={styles.textBantuan}> Butuh Bantuan ?</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: '#000000a0',
    marginTop: 200,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 150,
    // backgroundColor : 'blue',
    paddingHorizontal: 25,
  },
  login: {
    // marginBottom : 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 20,
    letterSpacing: 1,
    alignItems: 'center',
    // alignItems : 'center'
    borderBottomWidth: 2,
    borderColor: 'white',
    flex: 1,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    marginRight: 10,
  },
  btnBorder: {
    marginTop: 25,
    borderWidth: 2,
    paddingVertical: 8,
    flexDirection: 'row',
    borderColor: 'white',
    borderRadius: 20,
    // flex : 1,
  },
  btnText: {
    // position : "relative",
    flex: 2,
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 3,
    color: 'white',
  },
  line: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor : 'yellow',
    alignItems: 'center',
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: 'white',
    height: 0,
    flex: 1,
  },
  textLine: {
    paddingHorizontal: 10,
    fontSize: 20,
    justifyContent: 'center',
    color: 'white',
  },
  btnBorderJoin: {
    marginTop: 25,
    borderWidth: 2,
    paddingVertical: 8,
    flexDirection: 'row',
    borderColor: '#01c5c4',
    borderRadius: 20,
    backgroundColor: '#01c5c4',
    // flex : 1,
  },
  bantuan: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textBantuan: {
    fontSize: 15,
    color: '#0e918c',
    fontWeight: 'bold',
  },
});
