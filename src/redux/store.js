import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from "./reducer";
import rootSaga from './saga';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configStore = () => {
    const store = createStore(
        rootReducers,
        composeEnhancer(applyMiddleware(sagaMiddleware))
    );
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor };
}
export default configStore;