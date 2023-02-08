import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
  Alert,
  Share,
  ActivityIndicator,
} from 'react-native';
import {Box, StatusBar, Input, NativeBaseProvider, HStack} from 'native-base';
import * as actions from '../actions';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import styles from './styles/test.style';
import {COLOR} from '../utils/config';
import {default as ImageSVG} from 'react-native-remote-svg';
import Modal from 'react-native-modal';
import RenderHtml from 'react-native-render-html';

const isTablet = DeviceInfo.isTablet();
const {width} = Dimensions.get('window');

// const Test = () => {
//   return (
//     <>
//       {/* <StatusBar backgroundColor="#FFD54F" barStyle="dark-content" />

//       <Box safeAreaTop backgroundColor="#FFD54F" /> */}
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Try editing me! 🎉</Text>
//       </View>
//     </>
//   );
// };

// export default Test;
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSearch: null,
      coinList: [],
      coinSearch: [],
      waitingAdd: false,
      waitingAddSearch: false,
      countOffset: 0,
      countOffsetSearch: 0,
      arrayGiftBox: [],
      arrayGiftBoxSearch: [],
      modalOpenPopUp: false,
      dataCoin: null,
      isLoad: false,
    };
  }
  componentDidMount() {
    this.props.getCryptoCoin({limit: 10, offset: 0});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.timecoinList !== this.props.timecoinList) {
      if (this.props.coinList) {
        let arrayCoinList = [];
        arrayCoinList.push(this.props.coinList);
        this.setState(
          {coinList: this.state.coinList.concat(arrayCoinList[0])},
          () => this.setState({waitingAdd: false}),
        );
        // console.log(this.props.coinList[0],'test',arrayCoinList[0]);
      } else {
        this.setState({waitingAdd: false});
      }
    }
    if (prevProps.timecoinDetail !== this.props.timecoinDetail) {
      if (this.props.coinDetail) {
        // console.log('this.props.coinDetail', this.props.coinDetail);
        this.setState({modalOpenPopUp: true, dataCoin: this.props.coinDetail});
      }
    }
    if (prevState.valueSearch !== this.state.valueSearch) {
      this.setState({isLoad: true});
      if (this.state.valueSearch) {
        setTimeout(() => {
          this.props.getCoinSearch({
            search: this.state.valueSearch,
            limit: 10,
            offset: 0,
          });
        }, 1000);
      }
    }
    if (prevProps.timecoinSearch !== this.props.timecoinSearch) {
      if (this.props.coinSearch) {
        console.log(this.props.coinSearch, 'this.props.coinSearch');
        let arrayCoinSearch = [];
        arrayCoinSearch.push(this.props.coinSearch);
        this.setState(
          {coinSearch: this.state.coinSearch.concat(arrayCoinSearch[0])},
          () => this.setState({waitingAddSearch: false, isLoad: false}),
        );
      } else {
        console.log(this.props.coinSearch, 'this.props.coinSearch');
        this.setState({coinSearch: [], waitingAddSearch: false});
      }
    }
  }

  // componentWillUnmount() {
  //   // this.backHandler.remove()
  // }

  render() {
    console.log(this.state.coinSearch, 'coinSearch');
    const addItemHome = () => {
      // console.log(this.state.waitingAdd, 'this.state.waitingAdd');
      if (this.state.waitingAdd === false) {
        this.setState(
          {
            waitingAdd: true,
            countOffset: this.state.countOffset + 10,
          },
          () =>
            this.props.getCryptoCoin({
              limit: 10,
              offset: this.state.countOffset + 10,
            }),
        );
      }
    };

    const addItemSearch = () => {
      // console.log(this.state.waitingAdd, 'this.state.waitingAdd');
      if (this.state.waitingAddSearch === false) {
        this.setState(
          {
            waitingAddSearch: true,
            countOffsetSearch: this.state.countOffsetSearch + 10,
          },
          () =>
            this.props.getCoinSearch({
              search: this.state.valueSearch,
              limit: 10,
              offset: this.state.countOffsetSearch + 10,
            }),
        );
      }
    };

    const addArray = data => {
      if (data) {
        // console.log(this.state.arrayGiftBox, 'this.state.arrayGiftBox');
        let found =
          this.state.arrayGiftBox > 0
            ? this.state.arrayGiftBox.find((item, index) => {
                return item !== data
                  ? this.state.arrayGiftBox.push(data)
                  : null;
              })
            : this.state.arrayGiftBox.push(data);
      }
    };

    const addArraySearch = data => {
      if (data) {
        // console.log(this.state.arrayGiftBox, 'this.state.arrayGiftBox');
        let found =
          this.state.arrayGiftBoxSearch > 0
            ? this.state.arrayGiftBoxSearch.find((item, index) => {
                return item !== data
                  ? this.state.arrayGiftBoxSearch.push(data)
                  : null;
              })
            : this.state.arrayGiftBoxSearch.push(data);
      }
    };

    const handleSuffix = data => {
      // console.log(Math.abs(Number(data)), 'Math.abs(Number(data))');
      return Math.abs(Number(data)) >= 1.0e12
        ? (Math.abs(Number(data)) / 1.0e12).toFixed(2) + ' trillion'
        : // Six Zeroes for Millions
        Math.abs(Number(data)) >= 1.0e9
        ? (Math.abs(Number(data)) / 1.0e9).toFixed(2) + ' billion'
        : // Three Zeroes for Thousands
        Math.abs(Number(data)) >= 1.0e6
        ? (Math.abs(Number(data)) / 1.0e6).toFixed(2) + ' million'
        : Math.abs(Number(data));
    };

    const onShare = async () => {
      try {
        const result = await Share.share({
          message: 'Hi I am Weerachai Sakorn.',
        });

        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    };

    // console.log(this.state.dataCoin, 'dataCoin');
    return (
      <NativeBaseProvider>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Box safeAreaTop backgroundColor="#ffffff" pb="3" />

        <HStack bg="#ffffff" px="3" py="3">
          <View style={styles.inputContainer}>
            <Input
              placeholder="search"
              variant="filled"
              width="100%"
              height={isTablet ? '50px' : '40px'}
              bg="gray.100"
              borderRadius="8"
              py="1"
              px="2"
              placeholderTextColor="#c6c6c6"
              _hover={{bg: 'gray.200', borderWidth: 0}}
              borderWidth="0.5"
              borderColor="#d9d9d9"
              _web={{
                _focus: {style: {boxShadow: 'none'}},
              }}
              fontFamily="NotoSansThai-Regular"
              fontSize={isTablet ? 22 : 14}
              InputLeftElement={
                <Image
                  style={styles.iconSearch}
                  source={require('../assets/images/icon/search.png')}
                />
              }
              InputRightElement={
                this.state.valueSearch ? (
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        valueSearch: null,
                        countOffsetSearch: 0,
                        arrayGiftBoxSearch: [],
                        coinSearch: [],
                      })
                    }>
                    <View style={{}}>
                      <Image
                        style={[styles.iconClose, {tintColor: '#c6c6c6'}]}
                        source={require('../assets/images/icon/cross.png')}
                      />
                    </View>
                  </TouchableOpacity>
                ) : null
              }
              value={this.state.valueSearch}
              onChangeText={val => this.setState({valueSearch: val})}
            />
          </View>
        </HStack>
        <View style={[styles.line, {backgroundColor: '#ffffff'}]} />
        <View style={[styles.container]}>
          {this.state.valueSearch ? (
            this.state.isLoad == false ? (
              this.state.coinSearch && this.state.coinSearch.length > 0 ? (
                <ScrollView
                  contentContainerStyle={styles.contentContainer}
                  scrollIndicatorInsets={{right: 1}}
                  onMomentumScrollEnd={addItemSearch}>
                  <View style={styles.contentContainerInner}>
                    <View style={styles.contentGroup}>
                      <Text style={styles.contentItemTitleLg}>
                        Buy, sell and hold crypto
                      </Text>
                      {this.state.coinSearch.length > 0 &&
                        this.state.coinSearch.map((item, index) => {
                          console.log(item.change, 'item.change');
                          let valueChange =
                            item.change && item.change.length == 5
                              ? item.change.substring(1)
                              : item.change;
                          let flagChange =
                            item.change && item.change.substring(1, 0) == '-'
                              ? 1
                              : 0;
                          let sum = 5 * 2 ** index;
                          addArraySearch(sum);
                          return (
                            <View key={index}>
                              <TouchableOpacity
                                onPress={
                                  () =>
                                    this.props.getCoinDetail({
                                      uuid: item.uuid,
                                    })
                                  // this.setState({
                                  //   modalOpenPopUp: true,
                                  //   dataCoin: item,
                                  // })
                                }
                                style={[
                                  styles.paddingB5,
                                  {
                                    flex: 1,
                                    flexDirection: 'row',
                                  },
                                ]}>
                                <View
                                  style={[
                                    styles.flex1,
                                    styles.contentCardThree,
                                    {flexDirection: 'row'},
                                  ]}>
                                  <View style={{paddingHorizontal: 5}}>
                                    <ImageSVG
                                      style={[styles.iconRank]}
                                      // source={require('../assets/images/icon/cross.png')}
                                      source={{uri: item.iconUrl}}
                                      resizeMode="contain"
                                    />
                                  </View>
                                  <View
                                    style={{
                                      paddingHorizontal: 5,
                                      justifyContent: 'center',
                                      flex: 1,
                                    }}>
                                    <Text
                                      style={styles.contentItemTitleLg}
                                      numberOfLines={1}>
                                      {item.name}
                                    </Text>
                                    <Text
                                      style={[
                                        styles.contentItemTitle,
                                        {color: '#c6c6c6'},
                                      ]}>
                                      {item.symbol}
                                    </Text>
                                  </View>
                                  <View style={{paddingHorizontal: 5}}>
                                    <View
                                      style={[
                                        styles.flex1,
                                        {
                                          alignItems: 'flex-end',
                                          justifyContent: 'center',
                                        },
                                      ]}>
                                      <Text
                                        style={[
                                          styles.contentItemTextSm,
                                          {
                                            fontWeight: 'bold',
                                            color: 'black',
                                          },
                                        ]}>
                                        $ {Number(item.price).toFixed(5)}
                                      </Text>
                                    </View>
                                    <View
                                      style={[
                                        styles.flex1,
                                        {
                                          justifyContent: 'flex-end',
                                          flexDirection: 'row',
                                        },
                                      ]}>
                                      <Image
                                        style={[styles.iconArrowRank]}
                                        source={
                                          flagChange == 1
                                            ? require('../assets/images/icon/arrow_down_red.png')
                                            : require('../assets/images/icon/arrow_up_green.png')
                                        }
                                        resizeMode="contain"
                                      />
                                      <Text
                                        style={[
                                          styles.contentItemTextSm,
                                          {alignSelf: 'center'},
                                          flagChange == 1
                                            ? {color: 'red'}
                                            : {color: 'green'},
                                        ]}>
                                        {valueChange}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </TouchableOpacity>
                              {this.state.arrayGiftBoxSearch.length > 0 ? (
                                this.state.arrayGiftBoxSearch.find(
                                  element => element == index + 2,
                                ) ? (
                                  <TouchableOpacity
                                    onPress={() => onShare()}
                                    style={[
                                      styles.paddingB5,
                                      {
                                        flex: 1,
                                        flexDirection: 'row',
                                      },
                                    ]}>
                                    <View
                                      style={[
                                        styles.flex1,
                                        styles.contentCardThree,
                                        {flexDirection: 'row'},
                                      ]}>
                                      <View
                                        style={{
                                          width: isTablet ? 70 : 50,
                                          height: isTablet ? 70 : 50,
                                          paddingHorizontal: 5,
                                          backgroundColor: '#ffffff',
                                          borderRadius: 100,
                                          justifyContent: 'center',
                                        }}>
                                        <ImageSVG
                                          style={[styles.iconGiftBox]}
                                          source={require('../assets/images/icon/giftbox.png')}
                                          // source={{uri: item.iconUrl}}
                                          resizeMode="contain"
                                        />
                                      </View>
                                      <View
                                        style={{
                                          paddingHorizontal: 5,
                                          justifyContent: 'center',
                                          flex: 1,
                                        }}>
                                        <Text
                                          style={styles.contentItemText}
                                          numberOfLines={3}>
                                          You can earn $10 when you invite a
                                          friend to buy crypto.
                                          <Text
                                            style={{
                                              fontWeight: 'bold',
                                              color: '#5f9fe8',
                                            }}>
                                            {' '}
                                            Invite your friend
                                          </Text>
                                        </Text>
                                      </View>
                                    </View>
                                  </TouchableOpacity>
                                ) : null
                              ) : null}
                            </View>
                          );
                        })}
                    </View>
                  </View>
                </ScrollView>
              ) : (
                <View
                  style={[
                    styles.flex1,
                    {justifyContent: 'center', alignItems: 'center'},
                  ]}>
                  <Text style={styles.contentItemTitleLg}>Sorry</Text>
                  <Text style={[styles.contentItemText,{color:'#c6c6c6'}]}>
                    No result match this keyword
                  </Text>
                </View>
              )
            ) : (
              <View style={{height: 60, paddingTop: 20}}>
                <ActivityIndicator
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  size="large"
                  color="#45916A"
                />
              </View>
            )
          ) : (
            <ScrollView
              contentContainerStyle={styles.contentContainer}
              scrollIndicatorInsets={{right: 1}}
              onMomentumScrollEnd={addItemHome}>
              <View style={styles.contentContainerInner}>
                <View>
                  <View style={styles.contentGroup}>
                    <Text style={styles.contentItemTitleLg}>
                      Top <Text style={{color: 'red'}}>3</Text> rank crypto
                    </Text>
                    <View
                      style={[
                        {justifyContent: 'center', flexDirection: 'row'},
                      ]}>
                      {this.state.coinList && this.state.coinList.length > 0
                        ? this.state.coinList.slice(0, 3).map((item, index) => {
                            // console.log(item.change, 'item.change');
                            let valueChange =
                              item.change.length == 5
                                ? item.change.substring(1)
                                : item.change;
                            let flagChange =
                              item.change.substring(1, 0) == '-' ? 1 : 0;
                            return (
                              <TouchableOpacity
                                key={index}
                                style={[styles.contentCard]}
                                onPress={
                                  () =>
                                    this.props.getCoinDetail({
                                      uuid: item.uuid,
                                    })
                                  // this.setState({
                                  //   modalOpenPopUp: true,
                                  //   dataCoin: item,
                                  // })
                                }>
                                <ImageSVG
                                  style={[styles.iconRank]}
                                  // source={require('../assets/images/icon/cross.png')}
                                  source={{uri: item.iconUrl}}
                                />
                                <Text
                                  style={[
                                    styles.contentItemTitleLg,
                                    styles.paddingB5,
                                    {color: item.color},
                                  ]}>
                                  {item.symbol}
                                </Text>
                                <Text
                                  style={[
                                    styles.contentItemTextSm,
                                    styles.paddingB5,
                                  ]}>
                                  {item.name}
                                </Text>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                  <Image
                                    style={[styles.iconArrowRank]}
                                    source={
                                      flagChange == 1
                                        ? require('../assets/images/icon/arrow_down_red.png')
                                        : require('../assets/images/icon/arrow_up_green.png')
                                    }
                                    resizeMode="contain"
                                  />
                                  <Text
                                    style={[
                                      styles.contentItemTextSm,
                                      styles.paddingB5,
                                      {alignSelf: 'center'},
                                      flagChange == 1
                                        ? {color: 'red'}
                                        : {color: 'green'},
                                    ]}>
                                    {valueChange}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            );
                          })
                        : null}
                    </View>
                  </View>
                  <View style={styles.contentGroup}>
                    <Text style={styles.contentItemTitleLg}>
                      Buy, sell and hold crypto
                    </Text>
                    {this.state.coinList && this.state.coinList.length > 0
                      ? this.state.coinList
                          .slice(3)
                          .map((item, index, array) => {
                            // console.log(index + 1, 'index');
                            let valueChange =
                              item.change.length == 5
                                ? item.change.substring(1)
                                : item.change;
                            let flagChange =
                              item.change.substring(1, 0) == '-' ? 1 : 0;
                            let sum = 5 * 2 ** index;
                            addArray(sum);

                            // this.setState({
                            //   arrayGiftBox: this.state.arrayGiftBox.push(
                            //     5 * 2 ** index,
                            //   ),
                            // });

                            return (
                              <View key={index}>
                                <TouchableOpacity
                                  onPress={
                                    () =>
                                      this.props.getCoinDetail({
                                        uuid: item.uuid,
                                      })
                                    // this.setState({
                                    //   modalOpenPopUp: true,
                                    //   dataCoin: item,
                                    // })
                                  }
                                  style={[
                                    styles.paddingB5,
                                    {
                                      flex: 1,
                                      flexDirection: 'row',
                                    },
                                  ]}>
                                  <View
                                    style={[
                                      styles.flex1,
                                      styles.contentCardThree,
                                      {flexDirection: 'row'},
                                    ]}>
                                    <View style={{paddingHorizontal: 5}}>
                                      <ImageSVG
                                        style={[styles.iconRank]}
                                        // source={require('../assets/images/icon/cross.png')}
                                        source={{uri: item.iconUrl}}
                                        resizeMode="contain"
                                      />
                                    </View>
                                    <View
                                      style={{
                                        paddingHorizontal: 5,
                                        justifyContent: 'center',
                                        flex: 1,
                                      }}>
                                      <Text
                                        style={styles.contentItemTitleLg}
                                        numberOfLines={1}>
                                        {item.name}
                                      </Text>
                                      <Text
                                        style={[
                                          styles.contentItemTitle,
                                          {color: '#c6c6c6'},
                                        ]}>
                                        {item.symbol}
                                      </Text>
                                    </View>
                                    <View style={{paddingHorizontal: 5}}>
                                      <View
                                        style={[
                                          styles.flex1,
                                          {
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                          },
                                        ]}>
                                        <Text
                                          style={[
                                            styles.contentItemTextSm,
                                            {
                                              fontWeight: 'bold',
                                              color: 'black',
                                            },
                                          ]}>
                                          $ {Number(item.price).toFixed(5)}
                                        </Text>
                                      </View>
                                      <View
                                        style={[
                                          styles.flex1,
                                          {
                                            justifyContent: 'flex-end',
                                            flexDirection: 'row',
                                          },
                                        ]}>
                                        <Image
                                          style={[styles.iconArrowRank]}
                                          source={
                                            flagChange == 1
                                              ? require('../assets/images/icon/arrow_down_red.png')
                                              : require('../assets/images/icon/arrow_up_green.png')
                                          }
                                          resizeMode="contain"
                                        />
                                        <Text
                                          style={[
                                            styles.contentItemTextSm,
                                            {alignSelf: 'center'},
                                            flagChange == 1
                                              ? {color: 'red'}
                                              : {color: 'green'},
                                          ]}>
                                          {valueChange}
                                        </Text>
                                      </View>
                                    </View>
                                  </View>
                                </TouchableOpacity>
                                {this.state.arrayGiftBox.length > 0 ? (
                                  this.state.arrayGiftBox.find(
                                    element => element == index + 2,
                                  ) ? (
                                    <TouchableOpacity
                                      onPress={() => onShare()}
                                      style={[
                                        styles.paddingB5,
                                        {
                                          flex: 1,
                                          flexDirection: 'row',
                                        },
                                      ]}>
                                      <View
                                        style={[
                                          styles.flex1,
                                          styles.contentCardThree,
                                          {flexDirection: 'row'},
                                        ]}>
                                        <View
                                          style={{
                                            width: isTablet ? 70 : 50,
                                            height: isTablet ? 70 : 50,
                                            paddingHorizontal: 5,
                                            backgroundColor: '#ffffff',
                                            borderRadius: 100,
                                            justifyContent: 'center',
                                          }}>
                                          <ImageSVG
                                            style={[styles.iconGiftBox]}
                                            source={require('../assets/images/icon/giftbox.png')}
                                            // source={{uri: item.iconUrl}}
                                            resizeMode="contain"
                                          />
                                        </View>
                                        <View
                                          style={{
                                            paddingHorizontal: 5,
                                            justifyContent: 'center',
                                            flex: 1,
                                          }}>
                                          <Text
                                            style={styles.contentItemText}
                                            numberOfLines={3}>
                                            You can earn $10 when you invite a
                                            friend to buy crypto.
                                            <Text
                                              style={{
                                                fontWeight: 'bold',
                                                color: '#5f9fe8',
                                              }}>
                                              {' '}
                                              Invite your friend
                                            </Text>
                                          </Text>
                                        </View>
                                      </View>
                                    </TouchableOpacity>
                                  ) : null
                                ) : null}
                              </View>
                            );
                          })
                      : null}
                  </View>
                </View>
              </View>
            </ScrollView>
          )}
          {/* <View style={styles.contentGroup}>
                <Text style={styles.contentItemTitleLg}>
                  Buy, sell and hold crypto
                </Text>
                <TouchableOpacity
                  style={[
                    styles.paddingB5,
                    {
                      flex: 1,
                      flexDirection: 'row',
                    },
                  ]}>
                  <View
                    style={[
                      styles.flex1,
                      styles.contentCardThree,
                      {flexDirection: 'row'},
                    ]}>
                    <View style={{paddingHorizontal: 5}}>
                      <Image
                        style={[
                          styles.iconRank,
                          {flex: 1, tintColor: '#c6c6c6', alignSelf: 'center'},
                        ]}
                        source={require('../assets/images/icon/cross.png')}
                        resizeMode="contain"
                      />
                    </View>
                    <View
                      style={{
                        paddingHorizontal: 5,
                        justifyContent: 'center',
                        flex: 1,
                      }}>
                      <Text style={styles.contentItemTitleLg} numberOfLines={1}>
                        BTC
                      </Text>
                      <Text
                        style={[styles.contentItemTitle, {color: '#c6c6c6'}]}>
                        USD
                      </Text>
                    </View>
                    <View style={{paddingHorizontal: 5}}>
                      <View
                        style={[
                          styles.flex1,
                          {alignItems: 'flex-end', justifyContent: 'center'},
                        ]}>
                        <Text style={[styles.contentItemTextSm]}>
                          5454541.00007
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.flex1,
                          {justifyContent: 'flex-end', flexDirection: 'row'},
                        ]}>
                        <Image
                          style={[styles.iconArrowRank]}
                          source={require('../assets/images/icon/arrow_down_red.png')}
                          resizeMode="contain"
                        />
                        <Text style={[styles.contentItemTextSm]}>1.07</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View> */}
        </View>

        <Modal
          animationType="slide"
          isVisible={this.state.modalOpenPopUp}
          supportedOrientations={[
            'portrait',
            'portrait-upside-down',
            'landscape',
            'landscape-left',
            'landscape-right',
          ]}
          backdropOpacity={0.4}
          style={styles.bottomModal}
          onRequestClose={() => {
            this.setState({modalOpenPopUp: false});
          }}>
          {this.state.dataCoin ? (
            <View style={styles.modalStyle}>
              <View style={[{flexDirection: 'row', marginBottom: 8}]}>
                <View
                  style={{
                    paddingHorizontal: 5,
                    justifyContent: 'center',
                  }}>
                  <ImageSVG
                    style={[styles.iconDetail]}
                    // source={require('../assets/images/icon/cross.png')}
                    source={{
                      uri: this.state.dataCoin.iconUrl,
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    paddingHorizontal: 5,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      styles.contentItemTitleLg,
                      {color: this.state.dataCoin.color},
                    ]}>
                    {this.state.dataCoin.name}
                    <Text style={[styles.contentItemTitle, {color: 'black'}]}>
                      {' '}
                      {'(' + this.state.dataCoin.symbol + ')'}
                    </Text>
                  </Text>
                  <Text style={[styles.contentItemTitle]}>
                    PRICE{' '}
                    <Text style={[styles.contentItemText]}>
                      $ {Number(this.state.dataCoin.price).toFixed(2)}
                    </Text>
                  </Text>
                  <Text style={[styles.contentItemTitle]}>
                    MARKET CAP{' '}
                    <Text style={[styles.contentItemText]}>
                      {handleSuffix(this.state.dataCoin.marketCap)}
                      {/* {handleSuffix(1000000000000)} */}
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={[styles.line, styles.flex1]}>
                <ScrollView>
                  <View style={styles.scrollableModalContent1}>
                    {/* <Text style={[styles.contentItemTitle]}>
                      {this.state.dataCoin.marketCap}
                    </Text> */}
                    <RenderHtml
                      contentWidth={width}
                      source={{
                        html: this.state.dataCoin.description,
                      }}
                      enableExperimentalMarginCollapsing={true}
                      tagsStyles={{
                        p: {textAlign: 'justify'},
                      }}
                    />
                  </View>
                </ScrollView>
              </View>
              <TouchableOpacity
                onPress={() => Linking.openURL(this.state.dataCoin.websiteUrl)}
                style={{marginBottom: -10, marginTop: 10, padding: 5}}>
                <Text
                  style={[
                    styles.contentItemText,
                    {textAlign: 'center', fontWeight: 'bold', color: '#5f9fe8'},
                  ]}>
                  GO TO WEBSITE
                </Text>
              </TouchableOpacity>
              {/* <Text style={styles.modalText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text> */}
            </View>
          ) : null}
        </Modal>
      </NativeBaseProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    coinList: state.coin.coinList,
    timecoinList: state.coin.timecoinList,
    coinDetail: state.coin.coinDetail,
    timecoinDetail: state.coin.timecoinDetail,
    coinSearch: state.coin.coinSearch,
    timecoinSearch: state.coin.timecoinSearch,
  };
};

export default connect(mapStateToProps, actions)(Test);
