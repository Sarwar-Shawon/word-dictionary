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

import PageHeader from './common/header'
import {customStyle} from "./common/customStyle";
import SearchView from './searchView'
import FavView from './favView'
/**
 */
class Home extends PureComponent
{
    constructor( props )
    {
        super( props )

        this.state = {

            optSel: 'search'
        }
    }

    render ()
    {
        const {optSel} = this.state

        return (
            <PageHeader>

                <View style={{flexDirection: 'row', marginVertical: 15, height: 40, margin: 20}}>

                    <TouchableOpacity style={[customStyle.searchButton,{backgroundColor: optSel ==='search' ? '#843272' : '#ffffff',marginRight: 10}]}
                                      onPress={()=> this.setState({optSel: 'search'})}
                    >
                        <View>
                            <MaterialCommunityIcons name="book-search-outline"  size={18} color={optSel ==='search' ? '#fff' : '#000'}/>
                        </View>
                        <View>
                            <Text style={{color: optSel ==='search' ? '#fff' : '#000'}}>Search Dictionary</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[customStyle.searchButton,{backgroundColor: optSel !=='search' ? '#843272' : '#ffffff'}]}
                                      onPress={()=> this.setState({optSel: 'favourite'})}

                    >
                        <View>
                            <MaterialIcons name="favorite"  size={18} color={optSel !=='search' ? '#fff' : '#000'}/>
                        </View>
                        <View>
                            <Text style={{color: optSel !=='search' ? '#fff' : '#000'}}>View Favourite</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <>
                    <View style={{flex:1}}>
                        {
                            optSel  === 'search'
                                ?
                                <SearchView />
                                :
                                <FavView />
                        }
                    </View>

                </>

            </PageHeader>

        )
    }
}   // Home

/**
 */
const mapStateToProps = (state) => {
    return state;
}   //

/**
 */
export default connect(mapStateToProps, actions)( Home )


