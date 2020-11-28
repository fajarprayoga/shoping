// /ini contoh state secara global

import {combineReducers} from '@reduxjs/toolkit';

//  const initialState = {
//     name : 'fajar'
//  }

// const reducer = (state = initialState, action)=>{ //kirim nilai initiallState ke state
//     return state; //dan hasilkan nilai state saat reducer ini dipanggil di store,js
// };

const User = {
  data: {
    id: null,
    namaLengkap: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    alamat: '',
    namaBank: '',
    namaPemilik: '',
    nomorBank: '',
  },
};
const UserReducer = (state = User, action) => {
  //kirim nilai initiallState ke state
  if (action.type === 'SET_DATA_USER') {
    return {
      ...state,
      data: {
        ...state.data,
        id: action.value.id,
        namaLengkap: action.value.namaLengkap,
        password: action.value.password,
        confirmPassword: action.value.confirmPassword,
        email: action.value.email,
        phone: action.value.phone,
        alamat: action.value.alamat,
        namaBank: action.value.namaBank,
        namaPemilik: action.value.namaPemilik,
        nomorBank: action.value.nomorBank,
      },
    };
  }
  return state; //dan hasilkan nilai state saat reducer ini dipanggil di store,js
};

// const initialStateLogin = {
//   title: 'Login Page',
//   desc: 'ini aalah desc ntuk Login',
// };
// const LoginReducer = (state = initialStateLogin, action) => {
//   //kirim nilai initiallState ke state
//   return state; //dan hasilkan nilai state saat reducer ini dipanggil di store,js
// };

const initialCartItem = {
  item : [],
  total : 0,
}
const CartReducer = (state = initialCartItem, action) => {
  // console.log('initial reducer',initialCartItem.length)
  if (action.type === 'ADD_TO_CART') {
    // return (
    state.item[state.item.length] = action.valueItem;
    state.total = state.total + action.valueItem.harga

    // item[item.length] = {ID:'3',Name:'Some name 3',Notes:'NOTES 3'};
    // )
  } else if (action.type === 'CHANGE_TO_QTY') {
    if (action.valueItem < 0) {
      action.valueItem = 0;
    }
    state.item.map((x) => {
      if (x.id === action.id) {
        x.qty = action.valueItem;
        x.harga = action.harga * action.valueItem
        // console.log('qty reducer', action.valueItem);
        if(action.typeOperator == 'MIN'){
          state.total = state.total - action.harga
          console.log('ini kurang pada state',state.total)
        }else if(action.typeOperator == 'PLUSH'){
          state.total = state.total + action.harga
          console.log('ini plush pada state',state.total)
        }

      }
      // state.total = state.total + x.harga
      // state.total = 0
    });
  } else if (action.type === 'DELETE_CART') {
    console.log('delete');
    for (var i = 0; i < state.item.length; i++) {
      if (state.item[i].id === action.id) {
        state.total = state.total - state.item[i].harga
        state.item.splice(i, 1);
        // console.log('state id ',i,state[i].namaProduct)
      }
      console.log(state);
    }
  }
  //kirim nilai initiallState ke state
  return state; //dan hasilkan nilai state saat reducer ini dipanggil di store,js
};

const reducer = combineReducers({
  UserReducer,
  // LoginReducer,
  CartReducer,
});

export default reducer;
