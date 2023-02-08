import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Test from './components/test';

const onBackPress = () => {
    if (Actions.state.index === 0) {
        return false
    }
    Actions.pop();
    return true
};

const AppRouter = props => {
    return (
        <Router backAndroidHandler={onBackPress}>
            <Scene key="root" hideNavBar={true}>
                <Scene
                    key="testPage1"
                    component={Test}
                />
            </Scene>
        </Router>
    );
};

export default AppRouter
