import { combineReducers, createStore, applyMiddleware } from 'redux';
import reducerUser from './users/reducer';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { fetchLogin } from './users/epic';

// const middlewares = [fetchLogin];
// root epic
const rootEpic = combineEpics(fetchLogin);

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({ reducerUser });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// saga
// const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
// let store = createStore(persistedReducer, applyMiddleware(epicMiddleware));

// let persistor = persistStore(store);

// export { store, persistor };
export default function configureStore() {
  let store = createStore(persistedReducer, applyMiddleware(epicMiddleware));
  let persistor = persistStore(store);
  epicMiddleware.run(rootEpic);
  return { store, persistor };
}
