import React, {useState, useEffect} from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {promo} from '../../assets';
import {colors} from '../../utils/colors';
import {useSelector, useDispatch} from 'react-redux';
import {change_to_qty, delete_cart} from '../../redux';
import Axios from 'axios';

const ItemKeranjang = ({namaProduct, harga, total, id}) => {
  const [isSelected, setSelection] = useState(false);
  const [qty, setQty] = useState(total);
  const cartReducer = useSelector((state) => state.CartReducer);
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const [products, setProducts] = useState({});


const getProduct = () => {
  Axios.get(`http://10.0.2.2:3004/product/${id}`)
  .then((result) => {
    console.log('data product : ', result);
    setProducts(result.data);
    // setLoading(false);
  });
};
  if (parseInt(qty) < 0) {
    setQty(0);
  }

  const quantity = (type) => {
    if (type === 'min') {
      console.log(products)
      setQty(qty - 1);
      dispatch(change_to_qty(qty - 1, id, products.harga, 'MIN'));
      getProduct();
    } else {
      setQty(qty + 1);
      dispatch(change_to_qty(qty + 1, id, products.harga, 'PLUSH'));
      getProduct();
    }
  };

  const delete_cart_item = (id) => {
    dispatch(delete_cart(id));
    getProduct();
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.detail}>
          {/* <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          /> */}
          <Image source={promo} style={styles.image} />
          <View style={styles.textContent}>
            <Text style={styles.title}>{namaProduct} </Text>
            <Text>Sisa 5</Text>
            <Text style={styles.harga}>Rp. {harga}</Text>
          </View>
        </View>
        <View style={styles.formNote}>
          <TouchableOpacity
            onPress={() => {
              delete_cart_item(id);
            }}>
            <Icon name="trash" style={styles.iconTrash} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              quantity('min');
            }}>
            <Icon name="minus" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.qty}>{qty} </Text>
          <TouchableOpacity
            onPress={() => {
              quantity('plush');
            }}>
            <Icon name="plus" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default ItemKeranjang;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    // marginBottom :
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    // marginLeft: 10,
  },
  textContent: {
    paddingHorizontal: 10,
    width: 250,
  },
  title: {
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  harga: {
    fontWeight: 'bold',
  },
  formNote: {
    // flex : 1,
    // backgroundColor : 'red',
    height: 65,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  note: {
    bottom: 10,
    borderBottomWidth: 1,
    width: 200,
    fontSize: 15,
    borderBottomColor: colors.default,
    // marginRight: 8,
  },
  iconTrash: {
    fontSize: 40,
    color: colors.dark,
    marginRight: 20,
    // borderWidth : 1
    // paddingHorizontal : 3
  },
  icon: {
    fontSize: 20,
    color: '#ffffff',
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 50,
    textAlign: 'center',
    paddingVertical: 4,
    backgroundColor: colors.default,
    borderColor: colors.default,
    // paddingHorizontal : 3
  },
  qty: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    width: 120,
    textAlign: 'center',
    fontSize: 20,
    borderBottomColor: colors.default,
  },
  line: {
    marginTop: 10,
    borderColor: colors.disable,
    borderWidth: 4,
  },
  btnSimpan: {
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  simpan: {
    textAlign: 'right',
  },
});
