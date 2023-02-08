import { combineReducers } from 'redux';

import CoinReducers from './CoinReducers';



const AppReducers = combineReducers({
    coin: CoinReducers,
   

})

export default AppReducers
