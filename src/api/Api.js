import axios from 'axios';
import SocketApi from './SocketApi';
import { authToken, deviceUtils } from '../utils';

const urls = {
  baseURL: 'https://apiko-marketplace-api-2019.herokuapp.com',
  AUTH: '/auth',
  ACCOUNT: '/account',
  UPLOAD: '/upload',
  PRODUCTS: '/products',
  USERS: '/users',
  CHATS: '/chats',
  MESSAGES: '/messages',
};

export const Auth = {
  _token: null,

  login(body) {
    return axios.post(`${urls.baseURL}${urls.AUTH}/login`, body);
  },

  register(body) {
    return axios.post(`${urls.baseURL}${urls.AUTH}/register`, body);
  },

  getViewer() {
    return axios.get(`${urls.baseURL}${urls.ACCOUNT}/user`);
  },

  // ------------------------ TOKEN

  async getToken() {
    const token = await authToken.get();
    this._token = token;
    this._storeTokenToAxios(token);
    SocketApi.init(token);
    return token;
  },

  async setToken(token) {
    await authToken.set(token);
    this._token = token;
    this._storeTokenToAxios(token);
    return token;
  },

  removeToken() {
    this._token = null;
    this._removeTokenFromAxios();
    authToken.remove();
  },

  _storeTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  _removeTokenFromAxios() {
    axios.defaults.headers.common.Authorization = null;
  },
};

// ------------------------ PRODUCTS

export const Products = {

  getLatest({ offset = 0, limit = 20 }) {
    return axios.get(`${urls.baseURL}${urls.PRODUCTS}/latest`, {
      params: {
        offset,
        limit,
      },
    });
  },

  addProduct(body) {
    return axios.post(`${urls.baseURL}${urls.PRODUCTS}`, body);
  },

  getProduct(id) {
    return axios.get(`${urls.baseURL}${urls.PRODUCTS}/${id}`);
  },

  removeFromSaved(productId) {
    return axios.post(`${urls.baseURL}${urls.PRODUCTS}/${productId}/unsave`);
  },

  saveProduct(productId) {
    return axios.post(`${urls.baseURL}${urls.PRODUCTS}/${productId}/save`);
  },

  fetchSaved() {
    return axios.get(`${urls.baseURL}${urls.PRODUCTS}/saved`);
  },

  getUserProducts(id) {
    return axios.get(`${urls.baseURL}${urls.USERS}/${id}${urls.PRODUCTS}`);
  },

  getProductsOwner(id) {
    return axios.get(`${urls.baseURL}${urls.USERS}/${id}`);
  },
};

// ------------------------ IMAGES


export const Images = {
  uploadImage(photo) {
    const body = new FormData();
    body.append('image', {
      name: 'photo',
      type: 'image/jpeg',
      uri:
      deviceUtils.isAndroid ? photo.uri : photo.uri.replace('file://', ''),
    });
    return axios.post(`${urls.baseURL}${urls.UPLOAD}/images`, body, {
      headers: { ContentType: 'multipart/form-data' },
    });
  },
};


// ------------------------ CHATS

export const Chats = {
  createChat(productId) {
    return axios.post(`${urls.baseURL}${urls.PRODUCTS}/${productId}/createChat`);
  },

  fetchChats() {
    return axios.get(`${urls.baseURL}${urls.CHATS}`);
  },
};

// ------------------------ MESSAGES

export const Messages = {
  sendMessage(chatId, text) {
    return axios.post(`${urls.baseURL}${urls.CHATS}/${chatId}${urls.MESSAGES}`, { text });
  },

  fetchMessages(chatId, { from, limit = 10 }) {
    return axios.get(`${urls.baseURL}${urls.CHATS}/${chatId}${urls.MESSAGES}`, {
      params: {
        from,
        limit,
      },
    });
  },
};


// ------------------------ SEARCH

export const Search = {
  searchProductsBy({
    queries, offset = 0, limit = 20,
  }) {
    return axios.get(`${urls.baseURL}${urls.PRODUCTS}/search`, {
      params: {
        offset,
        limit,
        ...queries,
      },
    });
  },
};
