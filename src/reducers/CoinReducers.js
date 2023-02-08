import {
  GET_CRYPTO_COIN_SUCCESS,
  GET_CRYPTO_COIN_ERROR,
  GET_COIN_DETAIL_SUCCESS,
  GET_COIN_DETAIL_ERROR,
  GET_COIN_SEARCH_SUCCESS,
  GET_COIN_SEARCH_ERROR
} from '../actions/type';

const initialState = {
  coinList: [],
  timecoinList: null,

  coinDetail: [],
  timecoinDetail: null,

  coinSearch: [],
  timecoinSearch: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case GET_CRYPTO_COIN_SUCCESS:
      return {
        ...state,
        coinList: actions.payload.data,
        timecoinList: actions.payload.time,
      };
    case GET_CRYPTO_COIN_ERROR:
      return {
        ...state,
        coinList: [],
        // errorcoinList: actions.payload.data.message,
        timecoinList: actions.payload.time,
      };
    case GET_COIN_DETAIL_SUCCESS:
      return {
        ...state,
        coinDetail: actions.payload.data,
        timecoinDetail: actions.payload.time,
      };
    case GET_COIN_DETAIL_ERROR:
      return {
        ...state,
        coinDetail: [],
        // errorcoinList: actions.payload.data.message,
        timecoinDetail: actions.payload.time,
      };

      case GET_COIN_SEARCH_SUCCESS:
      return {
        ...state,
        coinSearch: actions.payload.data,
        timecoinSearch: actions.payload.time,
      };
    case GET_COIN_SEARCH_ERROR:
      return {
        ...state,
        coinSearch: [],
        // errorcoinList: actions.payload.data.message,
        timecoinSearch: actions.payload.time,
      };

    default:
      return state;
  }
};
