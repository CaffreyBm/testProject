import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import TouchHistoryMath from "react-native/Libraries/Interaction/TouchHistoryMath";
import { connect } from "react-redux";
import * as actions from "./actions";
import AppRouter from './router';

// const Index: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={{flex: 1}}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//         <AppRouter/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default Index;
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: null,
      appToken: null,
      fcmToken: null,
      modalVisible: false,
      product: null,
      notiData: null,
      alertVersion: true,
      versionAppData: null,
      updateVersion: null,
    };
  }
  componentDidMount() {
   
  }

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {
  //   // this.backHandler.remove()
  // }

  checkVersion = () => {
    // if (this.props.versionAppSuccess) {
    //     console.log('ifweerachai',this.props.versionAppSuccess);
    //     let currentVersion = VersionCheck.getCurrentVersion();
    //     let link_ios = 'https://apps.apple.com/th/app/mellow-97-5/id1250947797?mt=8%27'
    //     let link_android = 'https://play.google.com/store/apps/details?id=com.pun.cool.mellow&hl=en'
    //     let version_ios = this.props.versionAppSuccess.ios.version;
    //     let version_android = this.props.versionAppSuccess.android.version;
    //     if (Platform.OS === 'ios') {
    //         console.log('test');
    //         if ((version_ios > currentVersion) && this.state.alertVersion || (this.state.updateVersion < version_android)) {
    //             console.log('eeeeeeee');
    //             this.setState({ updateVersion: version_android });
    //             this.setState({ alertVersion: false });
    //             let currentV = currentVersion.split('.');
    //             let newV = version_ios.split('.');
    //             if ((newV[0] !== currentV[0]) || (newV[1] !== currentV[1])) {
    //                 console.log('if 4 version');
    //                 Alert.alert(
    //                     'แอพพลิเคชั่นมีการอัพเดทเวอร์ชั่น',
    //                     '',
    //                     [
    //                         {
    //                             text: 'อัพเดท', onPress: () => {
    //                                 this.setState({ alertVersion: true });
    //                                 Linking.canOpenURL(link_ios).then(supported => {
    //                                     supported && Linking.openURL(link_ios);
    //                                 }, (err) => console.log(err));
    //                             }
    //                         },
    //                     ],
    //                     { cancelable: false }
    //                 )
    //             } else {
    //                 console.log('test2');
    //                 Alert.alert(
    //                     'แอพพลิเคชั่นมีการอัพเดทเวอร์ชั่น',
    //                     'คุณต้องการอัพเดทหรือไม่',
    //                     [
    //                         {
    //                             text: 'ไว้ก่อน', 
    //                         },
    //                         {
    //                             text: 'อัพเดท', onPress: () => {
    //                                 this.setState({ updateVersion: version_ios });
    //                                 this.setState({ alertVersion: true });
    //                                 Linking.canOpenURL(link_ios).then(supported => {
    //                                     supported && Linking.openURL(link_ios);
    //                                 }, (err) => console.log(err));
    //                             }
    //                         },
    //                     ],
    //                     { cancelable: false }
    //                 )
    //             }
    //         }
    //     } else if (Platform.OS === 'android') {
    //         console.log('Platform.OS ', version_android, currentVersion, VersionCheck.getCurrentVersion())
    //         if ((version_android > currentVersion) && this.state.alertVersion || (this.state.updateVersion < version_android)) {
    //             this.setState({ updateVersion: version_android });
    //             this.setState({ alertVersion: false });
    //             let currentV = currentVersion.split('.');
    //             let newV = version_android.split('.');
    //             console.log('Platform.OS if2');
    //             if ((newV[0] !== currentV[0]) || (newV[1] !== currentV[1])) {
    //                 Alert.alert(
    //                     'แอพพลิเคชั่นมีการอัพเดทเวอร์ชั่น',
    //                     '',
    //                     [
    //                         {
    //                             text: 'อัพเดท', onPress: () => {
    //                                 this.setState({ alertVersion: true });
    //                                 Linking.canOpenURL(link_android).then(supported => {
    //                                     supported && Linking.openURL(link_android);
    //                                 }, (err) => console.log(err));
    //                             }
    //                         },
    //                     ],
    //                     { cancelable: false }
    //                 )
    //             } else {
    //                 console.log('android test');
    //                 Alert.alert(
    //                     'แอพพลิเคชั่นมีการอัพเดทเวอร์ชั่น',
    //                     'คุณต้องการอัพเดทหรือไม่',
    //                     [
    //                         {
    //                             text: 'ไว้ก่อน',
    //                         },
    //                         {
    //                             text: 'อัพเดท', onPress: () => {
    //                                 this.setState({ updateVersion: version_android });
    //                                 this.setState({ alertVersion: true });
    //                                 Linking.canOpenURL(link_android).then(supported => {
    //                                     supported && Linking.openURL(link_android);
    //                                 }, (err) => console.log(err));
    //                             }
    //                         },
    //                     ],
    //                     { cancelable: false }
    //                 )
    //             }
    //         }
    //     }
    // }


  }
  render() {

    return (
      <View style={{ flex: 1 }}>
        {/* <StatusBar barStyle={'dark-content'} /> */}
        <AppRouter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps,
  actions
)(Index);

