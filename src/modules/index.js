import { combineReducers } from 'redux';
import AsyncStorage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
import app from './app';
import auth from './auth';
import viewer from './viewer';
import products from './products';
import entities from './entities';
import chats from './chats';
import messages from './messages';
import search from './search';

const searchPersistConfig = {
  key: 'search',
  storage: AsyncStorage,
  blacklist: ['activeFilter', 'findProducts', 'findProductsMore', 'items'],
};

export default combineReducers({
  app,
  viewer,
  auth,
  products,
  entities,
  chats,
  messages,
  search: persistReducer(searchPersistConfig, search),
});
