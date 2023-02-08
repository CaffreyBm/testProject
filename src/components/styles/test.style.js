import {Dimensions, StyleSheet} from 'react-native';
import {COLOR, FONT_FAMILY, FONT_SIZE, Line_Height} from '../../utils/config';
import DeviceInfo from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const isTablet = DeviceInfo.isTablet();
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  //---------- start style ----------//
  container: {
    flex: 1,
    backgroundColor: COLOR.colorWhite,
  },
  contentContainer: {
    backgroundColor: COLOR.colorWhite,
    paddingVertical: hp('2.46%'), // 20px
  },
  contentContainerInner: {
    paddingHorizontal: wp('4%'), // 15px
  },
  contentGroup: {
    // borderBottomWidth: 1,
    // borderColor: COLOR.colorYellow,
    paddingBottom: hp('1.85%'), // 15px
  },
  contentItemTitle: {
    fontFamily: FONT_FAMILY.fontBrandBold,
    fontSize: FONT_SIZE.fontSizeContentTitle,
    color: COLOR.colorBlack,
  },
  contentItemTitleLg: {
    fontFamily: FONT_FAMILY.fontBrandBold,
    fontSize: FONT_SIZE.fontSizeContentTitleLg,
    color: COLOR.colorBlack,
  },
  contentItemTextSm: {
    fontFamily: FONT_FAMILY.fontBrand,
    fontSize: FONT_SIZE.fontSizeContentTextSm,
    color: COLOR.colorGray,
  },
  contentItemText: {
    fontFamily: FONT_FAMILY.fontBrand,
    fontSize: FONT_SIZE.fontSizeContentText,
    color: COLOR.colorBlack,
  },
  contentCard: {
    backgroundColor: COLOR.colorBody,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: width < 375 ? 100 : isTablet ? 140 : 110,
  },
  contentCardTwo: {
    backgroundColor: COLOR.colorBody,
    borderRadius: 8,
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  contentCardThree: {
    backgroundColor: COLOR.colorBody,
    borderRadius: 8,
    marginHorizontal: 5,
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  iconSearch: {
    width: isTablet ? 26 : 16,
    height: isTablet ? 26 : 16,
    marginLeft: wp('4%'), // 15px
  },
  iconClose: {
    width: isTablet ? 26 : 16,
    height: isTablet ? 26 : 16,
    marginRight: wp('4%'), // 15px
  },
  iconRank: {
    width: isTablet ? 70 : 40,
    height: isTablet ? 70 : 40,
  },
  iconGiftBox: {
    width: isTablet ? 70 : 40,
    height: isTablet ? 70 : 25,
  },
  iconDetail: {
    width: isTablet ? 90 : 70,
    height: isTablet ? 90 : 70,
  },
  iconArrowRank: {
    width: isTablet ? 15 : 10,
    height: isTablet ? 15 : 10,
    marginRight: wp('0.53%'), // 2px
    marginTop: hp('0.37%'), // 3px
  },
  inputContainer: {
    flex: 1,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 9,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#d9d9d9',
    elevation: 5,
    backgroundColor: COLOR.colorWhite,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#c6c6c6',
    paddingBottom: hp('1.85%'), // 15px
  },
  modalStyle: {
    width: wp('100%'), // 310px
    height:hp('70%'),
    maxWidth: '100%',
    borderRadius: wp('1.6%'), // 6px
    backgroundColor: COLOR.colorWhite,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 13,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#eeeeee',
    elevation: 1,
    alignSelf: 'flex-end',
    paddingVertical: hp('3.07%'), // 25px
    paddingHorizontal: wp('4%'), // 15px
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalStyleCondition: {
    maxHeight: '90%',
  },
  modalText: {
    fontFamily: FONT_FAMILY.fontBrand,
    fontSize: FONT_SIZE.fontSizeModalText,
    textAlign: 'center',
    letterSpacing: 1,
    color: '#656565',
  },
  modalTitle: {
    fontFamily: FONT_FAMILY.fontBrandBold,
    fontSize: FONT_SIZE.fontSizeModalTitle,
    textAlign: 'center',
    letterSpacing: -0.1,
    color: COLOR.colorGreenDark,
  },
  modalTitleSm: {
    fontSize: FONT_SIZE.fontSizeModalSm,
  },
  

  paddingB5: {
    paddingBottom: hp('0.62%'), // 5px
  },
  // ---------- end style ----------//
});
