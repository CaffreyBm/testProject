import DeviceInfo from 'react-native-device-info';
import {widthPercentageToDP} from "react-native-responsive-screen";
import {Dimensions} from "react-native";

//dev
export const BaseUrl = "https://api.coinranking.com/v2/"

const isTablet = DeviceInfo.isTablet();
const {width} = Dimensions.get('window');

export const COLOR = {
    colorBase: '#8c8d8f',
    colorBlack: '#333333',
    colorBlueLight: '#488BC9',
    colorBody: '#F4F5F5',
    colorBrand: '#45916A',
    colorGold: '#ca8f2b',
    colorGray: '#b9b7bd',
    colorGrayDark: '#444444',
    colorGrayLight: '#d1d1d1',
    colorGrayDim: '#666666',
    colorGreen: '#1e8315',
    colorGreenDark: '#45916a',
    colorGreenTb: '#237a51',
    colorOrange: '#ed9c00',
    colorOrangeDark: '#e69900',
    colorRed: '#ED0E00',
    colorRedBtn: '#ff0000',
    colorRedTb: '#ed0e00',
    colorYellow: '#e49f26',
    colorYellowBrand: '#ffd54f',
    colorYellowGolden: '#fbb813',
    colorYellowLight: '#ffc943',
    colorWhite: '#ffffff'
}

export const FONT_SIZE = {
    fontSizeBtnLg: width < 375 ? 14 : isTablet ? 22 : 16,
    fontSizeBtnMd: width < 375 ? 12 : isTablet ? 20 : 14,
    fontSizeBtnSm: width < 375 ? 10 : isTablet ? 18 : 12,
    fontSizeContentText: width < 375 ? 12 : isTablet ? 20 : 14,
    fontSizeContentTextSm: width < 375 ? 10 : isTablet ? 18 : 12,
    fontSizeContentTitle: width < 375 ? 14 : isTablet ? 22 : 16,
    fontSizeContentTitleLg: width < 375 ? 16 : isTablet ? 24 : 18,
    fontSizeContentLg: width < 375 ? 18 : isTablet ? 26 : 20,
    fontSizeContentTitleSm: width < 375 ? 12 : isTablet ? 20 : 14,
    fontSizeDateSm: width < 375 ? 8 : isTablet ? 16 : 10,
    fontSizeFormLabel: width < 375 ? 12 : isTablet ? 20 : 14,
    fontSizeFormLabelSm: width < 375 ? 10 : isTablet ? 18 : 12,
    fontSizeHeaderTitle: width < 375 ? 18 : isTablet ? 26 : 20,
    fontSizeHeaderTitleSm: width < 375 ? 16 : isTablet ? 24 : 18,
    fontSizeHeaderText: width < 375 ? 12 : isTablet ? 20 : 14,
    fontSizeHeaderTextSm: width < 375 ? 10 : isTablet ? 18 : 12,
    fontSizeModalText: width < 375 ? 10 : isTablet ? 18 : 12,
    fontSizeModalTextLg: width < 375 ? 10 : isTablet ? 20 : 14,
    fontSizeModalSm: width < 375 ? 14 : isTablet ? 26 : 16,
    fontSizeModalTitle: width < 375 ? 18 : isTablet ? 26 : 20,
    fontSizeTab: width < 375 ? 10 : isTablet ? 18 : 12,
    fontSizeTabLg: width < 375 ? 16 : isTablet ? 24 : 18,
}

export const FONT_FAMILY = {
    fontBrand: 'NotoSansThai-Regular',
    fontBrandBold: 'NotoSansThai-Bold',
    fontBrandMedium: 'NotoSansThai-Medium',
    fontBrandSemiBold: 'NotoSansThai-SemiBold',
    fontNormal: 'Poppins-Regular',
    fontNormalLight: 'Poppins-Light',
    fontNormalSemiBold: 'Poppins-SemiBold',
}

export const Line_Height = {
    lineHeightHeaderText: isTablet ? 28 : 22,
}
