/**
 * @copyright Md. Sarwar Hoshen
 */

import React, {PureComponent} from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    TextInput

} from 'react-native';

import {connect} from 'react-redux'
import * as actions from '../rdx/actions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {customStyle} from "./common/customStyle";


/**
 */
class SearchView extends PureComponent
{
    constructor( props )
    {
        super( props )
        this.state = {

            search_word: ''
        }

    }

    render ()
    {
        return (

            <View>
                <View style={{flexDirection: 'row', marginVertical: 15, margin: 20}}>

                    <View style={{flexDirection: 'row', flex:2,marginRight: 10, height: 35,borderWidth: 1,
                        borderColor: "#000"}}>

                        <View style={{justifyContent: 'center', paddingLeft: 5}}>
                            <MaterialIcons name="search"  size={18} color={ '#000'}/>
                        </View>

                        <TextInput
                            autoCorrect={false}
                            placeholderTextColor="#b7b7b7"
                            placeholder="Search Dictionary"
                            value={this.state.search_word}
                            onChangeText={(text) => this.setState({search_word: text})}
                        />

                    </View>


                    <TouchableOpacity style={{flex:1, height: 35,borderWidth: 1, borderColor: "#000", justifyContent: 'center', alignItems: 'center'}}
                                      onPress={()=> this.setState({optSel: 'search'})}
                    >
                        <Text style={{color:'#000'}}>
                            Search
                        </Text>

                    </TouchableOpacity>


                </View>

            </View>

        )
    }
}   // SearchView

/**
 */
const mapStateToProps = (state) => {
    return state;
}   //

/**
 */
export default connect(mapStateToProps, actions)( SearchView )


