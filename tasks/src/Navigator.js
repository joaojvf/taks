import React, { PureComponent } from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Agenda from './screens/Agenda';
import Auth from './screens/Auth';

const MainRoutes = createStackNavigator({
    Auth: { 
        screen: Auth,
    },
    Home: { 
        screen: Agenda,
    },
});

const MainNavigator = createAppContainer(MainRoutes, {initialRouteName: 'Auth'});

export default MainNavigator;