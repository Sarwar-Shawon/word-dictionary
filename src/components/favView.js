/**
 * @copyright Md. Sarwar Hoshen
 */

import React, {PureComponent} from 'react';

import {
    Text,
    View,
    TouchableOpacity,

} from 'react-native';

import {connect} from 'react-redux'
import * as actions from '../rdx/actions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {customStyle} from "./common/customStyle";

/**
 */
class FavView extends PureComponent
{
    constructor( props )
    {
        super( props )

    }

    render ()
    {
        return (

            <View>
                <Text>
                    Fav View
                </Text>
            </View>
        )
    }
}   // FavView

/**
 */
const mapStateToProps = (state) => {
    return state;
}   //

/**
 */
export default connect(mapStateToProps, actions)( FavView )


