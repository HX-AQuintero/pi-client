import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;


/* thunk ---> permite enviar más de una acción a la vez (M) */
/* composeWithDevTools ---> trae las herramientas de Redux */
