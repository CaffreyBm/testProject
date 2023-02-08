import axios from 'axios';
import {
    GET_CRYPTO_COIN_SUCCESS, 
    GET_CRYPTO_COIN_ERROR,
    GET_COIN_DETAIL_SUCCESS,
    GET_COIN_DETAIL_ERROR,
    GET_COIN_SEARCH_SUCCESS,
    GET_COIN_SEARCH_ERROR
} from './type';
import moment from 'moment';
import {BaseUrl} from '../utils/config';
const accessToken = 'coinrankingb4ac77ef5207f7e739f74a85c12f195b846dd741766c513f'

export const getCryptoCoin = request => {
  // console.log('request', request);
  return async dispatch => {
    axios
      .get(
        BaseUrl + 'coins?limit=' + request.limit + '&offset=' + request.offset,
        {
          headers: {
            'x-access-token': accessToken,
          },
        },
      )
      .then(function (response) {
        if (response.status === 200) {
          // console.log(response.data, 'getCryptoCoin');
          dispatch({
            type: GET_CRYPTO_COIN_SUCCESS,
            payload: {
              data: response.data.data.coins,
              time: new Date().toLocaleString(),
            },
          });
        } else {
          dispatch({
            type: GET_CRYPTO_COIN_ERROR,
            payload: {data: response.status, time: new Date().toLocaleString()},
          });
        }
      })
      .catch(function (error) {
        // console.log(error, 'test error');
        dispatch({
          type: GET_CRYPTO_COIN_ERROR,
          payload: {data: error, time: new Date().toLocaleString()},
        });
      });
  };
};

export const getCoinDetail = request => {
  // console.log('request', request);
  return async dispatch => {
    axios
      .get(BaseUrl + 'coin/' + request.uuid, {
        headers: {
          'x-access-token': accessToken,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          // console.log(response.data, 'getCoinDetail');
          dispatch({
            type: GET_COIN_DETAIL_SUCCESS,
            payload: {
              data: response.data.data.coin,
              time: new Date().toLocaleString(),
            },
          });
        } else {
          dispatch({
            type: GET_COIN_DETAIL_ERROR,
            payload: {data: response.status, time: new Date().toLocaleString()},
          });
        }
      })
      .catch(function (error) {
        // console.log(error, 'test error');
        dispatch({
          type: GET_COIN_DETAIL_ERROR,
          payload: {data: error, time: new Date().toLocaleString()},
        });
      });
  };
};

export const getCoinSearch = request => {
  // console.log('request', BaseUrl + 'coins/?search=' + request.search +'&limit='+ request.limit +'&offset='+ request.offset);
  return async dispatch => {
    axios
      .get(BaseUrl + 'coins/?search=' + request.search +'&limit='+ request.limit +'&offset='+ request.offset, {
        headers: {
          'x-access-token': accessToken,
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          // console.log(response.data, 'getCoinSearch');
          dispatch({
            type: GET_COIN_SEARCH_SUCCESS,
            payload: {
              data: response.data.data.coins,
              time: new Date().toLocaleString(),
            },
          });
        } else {
          dispatch({
            type: GET_COIN_SEARCH_ERROR,
            payload: {data: response.status, time: new Date().toLocaleString()},
          });
        }
      })
      .catch(function (error) {
        // console.log(error, 'test error');
        dispatch({
          type: GET_COIN_SEARCH_ERROR,
          payload: {data: error, time: new Date().toLocaleString()},
        });
      });
  };
};
