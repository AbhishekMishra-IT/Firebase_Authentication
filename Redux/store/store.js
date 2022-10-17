import {createStore} from 'redux';

import detailsReducer from "../reducer/reducer"; 

const store=createStore(detailsReducer);

export default store;
