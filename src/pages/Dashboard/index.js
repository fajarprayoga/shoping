import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {promo} from '../../assets';
import {Header, TopUp, Promo} from '../../component';
import {DashboardProduct} from '../../component/Product';
import {colors} from '../../utils/colors';
import Axios from 'axios';
const Dashboard = ({navigation}) => {
  useEffect(() => {
    getProduct();
  }, []);

  const [products, setProducts] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getProduct = () => {
    Axios.get('http://10.0.2.2:3004/product').then((result) => {
      console.log('result : ', result.data);
      setProducts(result.data);
      setLoading(false);
    });
  };

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.contentHeader}>
          <Text style={styles.textSaldo}>Saldo</Text>
          <Text style={styles.textRp}>
            Rp. <Text style={styles.textHarga}>2.500</Text>{' '}
          </Text>
          <Text style={styles.textRp}>
            Ovo Point <Text style={styles.point}>0</Text>{' '}
          </Text>
          <View style={styles.topUp}>
            <TopUp name="Top Up" icon="plus-circle" />
            <TopUp name="Transfer" icon="random" />
            <TopUp name="History" icon="history" />
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.promo}>
          <View style={styles.headerPromo}>
            <Text style={styles.textPromo}> Info Dan Promo Spesials</Text>
            <TouchableOpacity>
              <Text style={styles.textlihatPromo}> Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal pagingEnabled>
            <Promo sourceimage={promo} />
            <Promo sourceimage={promo} />
            <Promo sourceimage={promo} />
          </ScrollView>
        </View>
        <View style={styles.line} />
        <View style={styles.promo}>
          <View style={styles.headerPromo}>
            <Text style={styles.textPromo}>Tersedia Product </Text>
            <TouchableOpacity>
              <Text style={styles.textlihatPromo}> Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.product}>
            {products.map((product) => {
              return (
                <DashboardProduct
                  // key ={product.id}
                  key={product.id}
                  nameImage={promo}
                  textTitle={product.namaProduct}
                  textContent={product.deskripsi}
                  navigasi={() =>
                    navigation.navigate('DetailProduct', {id: product.id})
                  }
                  // cara kirim data dengan navigation
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  contentHeader: {
    paddingHorizontal: 20,
    backgroundColor: colors.default,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    height: 150,
    marginBottom: 50,
  },
  textSaldo: {
    letterSpacing: 2,
    color: '#ffffff',
    fontWeight: '500',
  },
  textRp: {
    marginVertical: 5,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  textHarga: {
    fontSize: 20,
    letterSpacing: 2,
  },
  point: {
    color: 'gold',
  },
  topUp: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-around',
    borderRadius: 10,
    height: 70,
    marginTop: 25,
    alignItems: 'center',
    borderColor: '#e8e8e8',
    borderWidth: 1,
  },
  line: {
    borderWidth: 3,
    borderColor: '#e8e8e8',
  },
  promo: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  headerPromo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  textPromo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textlihatPromo: {
    letterSpacing: 1,
    color: colors.default,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    flexWrap: 'wrap',
  },
});
