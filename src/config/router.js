/**
 * @copyright Md. Sarwar Hoshen
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {connect} from 'react-redux'
import * as actions from '../rdx/actions'
import Home from '../components/home'

/**
 */
const Stack = createStackNavigator();

const Stack_Home = ( props ) =>
{
    return (
        <Stack.Navigator initialRouteName="Home" headerMode='none'>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
}

/**
 */
class AppNavigator extends React.PureComponent
{
    /**
     */
    render()
    {
        return (
            <NavigationContainer>
                <Stack_Home />
            </NavigationContainer>
        )
    }   // render

    /**
     */
    componentDidMount()
    {

    }   // componentDidMount

}   // AppNavigator
/**
 */
const mapStateToProps = (state) => {
    return {};
}   //

/**
 */
export default connect(mapStateToProps, actions)( AppNavigator )
