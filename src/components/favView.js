/**
 * @copyright Md. Sarwar Hoshen
 */

import React, {PureComponent} from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Modal,TouchableWithoutFeedback

} from 'react-native';

import {connect} from 'react-redux'
import * as actions from '../rdx/actions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {customStyle} from "./common/customStyle";
import WordView from './wordView'

/**
 */
class FavView extends PureComponent
{
    constructor( props )
    {
        super( props )
        this.state = {
            showWord: '',
            fav: false
        }

    }

    render ()
    {
        return (

            <View>

                {
                    this.props.__dictionary.favList.length ?
                    <FlatList
                        data={this.props.__dictionary.favList}
                        renderItem={this.RenderItem}
                        keyExtractor={ ( item,index ) => index.toString() }
                    />
                    :
                    <View style={[customStyle.boxView,{justifyContent: 'center', alignItems: 'center', marginTop: 40}]}>

                        <MaterialCommunityIcons name="emoticon-wink-outline"  size={100} color={'#2d0648'}/>

                        <Text style={{fontSize: 20, fontWeight: "bold"}}>
                            You've not add any favourite words yet.
                        </Text>
                    </View>
                }
                {
                    this.state.showWord
                    ?
                        <Modal
                            transparent={true}
                            visible={true}
                            onRequestClose={() => this.setState({showWord: ''})}
                        >
                            <View style={{flex: 1}}>
                                <TouchableWithoutFeedback onPress={() => this.setState({showWord: ''})}>
                                    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}></View>
                                </TouchableWithoutFeedback>

                                <View style={{height:"80%",backgroundColor:"#fff"}}>
                                    <WordView
                                        word={this.state.showWord}
                                        fav={this.state.fav}
                                        SetFav={(val)=>this.setState({fav: val})}
                                    />
                                </View>
                            </View>
                        </Modal>
                    :
                    null

                }
            </View>
        )
    }
    /**
     */
    RenderItem = ({ item }) =>
    {
        return (
            <TouchableOpacity style={[customStyle.boxView]}
                              onPress={()=>this.setState({showWord: item, fav: true})}
            >
                <Text>{item.word}</Text>
            </TouchableOpacity>
        );
    };
}   // FavView

/**
 */
const mapStateToProps = (state) => {
    return state;
}   //

/**
 */
export default connect(mapStateToProps, actions)( FavView )


