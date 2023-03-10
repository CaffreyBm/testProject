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

