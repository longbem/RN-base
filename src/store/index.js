import { combineReducers, createStore } from 'redux';
import reducerUser from './users/reducer';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const rootReducer = combineReducers({ reducerUser });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
