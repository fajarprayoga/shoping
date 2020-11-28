import {ADD_TO_CART} from './actionTypes';

export const add_to_cart = (value, id_user) => {
  return {type: 'ADD_TO_CART', valueItem: value, id_user: id_user};
};

export const change_to_qty = (value, id, harga, typeOperator) => {
  return {type: 'CHANGE_TO_QTY', valueItem: value, id: id, harga: harga, typeOperator : typeOperator};
};

export const delete_cart = (id) => {
  return {type: 'DELETE_CART', id: id};
};
