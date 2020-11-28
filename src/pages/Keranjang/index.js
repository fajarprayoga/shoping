import React, {useState, useEffect} from 'react';
import {RefreshControl, StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Header, ItemKeranjang} from '../../component';
import {colors} from '../../utils/colors';
import {useSelector, useDispatch} from 'react-redux';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};


const Keranjang = () => {
  const [isSelected, setSelection] = useState(false);
  const cartReducer = useSelector((state) => state.CartReducer);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    cartReducer;
  },[])


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentHeader}>
        <Text style={styles.textKeranjang}>Keranjang</Text>
        <View style={styles.boxTitle}>
          <View style={styles.title}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text>Pilih Semua Barang</Text>
          </View>
          <Text style={styles.textHapus}>Hapus</Text>
        </View>
      </View>
      <ScrollView
        style={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {cartReducer.item.map((cart) => {
          return (
            <ItemKeranjang
              namaProduct={cart.namaProduct}
              harga={cart.harga}
              total={cart.qty}
              key={cart.id}
              id={cart.id}
              />
              );
        })}
      </ScrollView>
      <View style={styles.boxTotal}>
        <View>
          <Text style={styles.textTotal}>Total Harga</Text>
          <Text style={styles.hargaTotal}>{cartReducer.total}</Text>
        </View>
        <TouchableOpacity style={styles.borderBtn} >
          <Text style={styles.btnBeli}>Beli</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Keranjang;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  contentHeader: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.disable,
  },
  textKeranjang: {
    fontSize: 25,
    marginBottom: 10,
  },
  boxTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    // justifyContent : 'space-between',
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  textHapus: {
    // marginLeft: 140,
    color: colors.default,
    fontWeight: 'bold',
  },
  line: {
    marginTop: 10,
    borderColor: colors.disable,
    borderWidth: 4,
  },
  boxTotal: {
    // alignItems: "flex-end",
    height: 60,
    // backgroundColor : 'red',
    paddingHorizontal: 20,
    paddingTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.disable,
  },
  textTotal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  hargaTotal: {
    fontSize: 16,
  },
  btnBeli: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  borderBtn: {
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: colors.default,
    backgroundColor: colors.default,
  },
});
