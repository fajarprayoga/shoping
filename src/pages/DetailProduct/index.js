import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Alert} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {promo} from '../../assets';
import {Header} from '../../component';
import {colors} from '../../utils/colors';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {add_to_cart} from './../../redux';

const width = Dimensions.get('window').width;

const DetailProduct = ({navigation, route}) => {
  useEffect(() => {
    getDataProduct();
  }, []);

  // cara ambil data dari params yang dikirimkan dengan navigation {route.params.id}
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const cartReducer = useSelector((state) => state.CartReducer.item);
  const userReducer = useSelector((state) => state.UserReducer.data);
  const dispatch = useDispatch();
  var penanda = false;
  var lihat;

  const getDataProduct = () => {
    Axios.get(`http://10.0.2.2:3004/product/${route.params.id}`).then((res) => {
      console.log('data product  : ', res.data);
      setProduct(res.data);
      setLoading(false);
    });
  };

  var item = {
    id: product.id,
    id_user: userReducer.id,
    namaProduct: product.namaProduct,
    harga: product.harga,
    qty: 1,
    note: '',
  };

  const insertCart = () => {
    // cartReducer.map(itemCart => {
    //   itemCart.map(x => {
    //     console.log(x.namaProduct)
    //   })
    // })

    // console.log(cartReducer.length)
    if (cartReducer.length === 0) {
      penanda = true;
    } else {
      cartReducer.map((itemCart) => {
        // itemCart.map((x) => {
        //   if (x.id === product.id) {
        //     penanda = false;
        //   } else {
        //     penanda = true;
        //   }
        // });
        if (itemCart.id === product.id) {
          penanda = false;
          lihat = itemCart.id;
        } else {
          penanda = true;
        }
      });
    }

    if (penanda) {
      Alert.alert('item berhasil di tambahkan');
      dispatch(add_to_cart(item, userReducer.id));
    } else {
      console.log('id ', lihat);
      Alert.alert('item sudah ada di dalam keranjang');
    }

    // if(cartReducer.length !==0){
    //   cartReducer.map(itemCart => {
    //     itemCart.map(x => {
    //       if(x.id !== product.id){
    //         Alert.alert('===========================')
    //         dispatch(add_to_cart(item, userReducer.id))
    //       }
    //     })
    //   })
    // }

    // console.log(product)
    // dispatch(add_to_cart(item, userReducer.id))
    // console.log('cart reducer', cartReducer)
  };

  const tampil = () => {
    console.log(cartReducer);
    // console.log(cartReducer)
  };

  if (loading) {
    return <Text>hahahaha</Text>;
  }
  return (
    <View>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <ScrollView
            style={styles.scrollImage}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View style={styles.borderImage}>
              <Image source={promo} style={styles.image} />
              <Image source={promo} style={styles.image} />
              <Image source={promo} style={styles.image} />
              <Image source={promo} style={styles.image} />
            </View>
          </ScrollView>
          {/* <View style={styles.content}> */}
          <View style={styles.contentTitle}>
            <Text style={styles.harga}> {product.harga} </Text>
            <Text style={styles.title}> {product.namaProduct} </Text>
            <View style={styles.contentTerjual}>
              <Text style={styles.textTerjual}> Terjual 20</Text>
              <Text style={styles.bintang}>
                {' '}
                <Icon name="star" style={styles.star} /> 4.8 (9)
              </Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.contentInfo}>
            <Text style={styles.textInfo}>Informasi Produk</Text>
            <View style={styles.infoProduk}>
              <Text style={styles.info}>Berat</Text>
              <Text style={styles.info}>{product.berat} gram</Text>
            </View>
            <View style={styles.infoProduk}>
              <Text style={styles.info}>Kondisi</Text>
              <Text style={styles.info}>{product.kondisi}</Text>
            </View>
            <View style={styles.infoProduk}>
              <Text style={styles.info}>Pemesanan min</Text>
              <Text style={styles.info}>1 Buah</Text>
            </View>
            <View style={styles.infoProduk}>
              <Text style={styles.info}>Kategori</Text>
              <Text style={styles.info}>{product.kategori} </Text>
            </View>
            <View style={styles.infoProduk}>
              <Text style={styles.info}>Etalase</Text>
              <Text style={styles.info}>Minya Beog</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.contentInfo}>
            <Text style={styles.textInfo}>Deskripsi</Text>
            <Text style={styles.title}>{product.namaProduct}</Text>
            <Text>{product.deskripsi}</Text>
          </View>
          {/* </View> */}
        </View>
      </ScrollView>
      <View style={styles.borderButton}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonChat} onPress={tampil}>
            <Icon name="comment" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text style={styles.textCheckout}>Langsung beli</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCart}
            // onPress={() => navigation.navigate('Keranjang')}
            onPress={insertCart}>
            <Text style={styles.textCart}> Tambah keranjang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingBottom: 100,
  },
  borderImage: {
    // borderTopWidth: 1,
    borderColor: colors.disable,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    flexDirection: 'row',
  },
  image: {
    // width : width,
    flex: 1,
    height: 350,
    width: width,
    resizeMode: 'stretch',
  },
  content: {
    padding: 20,
  },
  harga: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentTitle: {
    padding: 20,
  },
  title: {
    color: colors.dark,
    letterSpacing: 2,
    fontSize: 15,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  contentTerjual: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textTerjual: {
    color: colors.dark,
  },
  bintang: {
    marginLeft: 15,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    textAlign: 'center',
    borderColor: colors.dark,
    color: colors.dark,
  },
  star: {
    color: 'yellow',
    fontSize: 20,
    textAlign: 'center',
  },
  line: {
    marginTop: 10,
    borderColor: colors.disable,
    borderWidth: 4,
  },
  contentInfo: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  textInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoProduk: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  borderButton: {
    flex: 1,
    flexDirection: 'row',
    // flexDirection : "row",
    alignItems: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    width: width,
    height: 100,
    // borderWidth : 1,
    color: colors.disable,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    borderTopColor: colors.disable,
    borderTopWidth: 1,
    justifyContent: 'space-between',
    position: 'relative',
    paddingHorizontal: 20,
    // marginTop : 100
  },
  buttonChat: {
    marginTop: 6,
    // marginLeft: 20,
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: '#28df99',
    borderColor: '#28df99',
  },
  icon: {
    color: '#ffffff',
    fontSize: 20,
  },
  buttonCheckout: {
    marginTop: 6,
    marginLeft: 10,
    borderWidth: 2,
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 10,
    borderColor: colors.default,
  },
  buttonCart: {
    marginTop: 6,
    // marginLeft: 10,
    borderWidth: 2,
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 10,
    borderColor: colors.default,
    // borderColor : 'green'
    backgroundColor: colors.default,
  },
  textCheckout: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.default,
  },
  textCart: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  scrollImage: {
    width: width,
    height: 350,
  },
});
