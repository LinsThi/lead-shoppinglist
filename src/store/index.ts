import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, createStore } from 'redux';
import { getStoredState, persistReducer, persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

import reducers from './ducks';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debounce: 0.1,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const middleware = [thunkMiddleware];

const composed = applyMiddleware(...middleware);

const store = createStore(persistedReducer, composed);

export const persistor = persistStore(store);

export function startStore() {
  getStoredState(persistConfig);
}

export default store;
