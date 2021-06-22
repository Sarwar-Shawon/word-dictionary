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
import {CustomPicker} from './common/picker'
import {Avatar} from 'react-native-elements'

const listType = [
    {label: "noun", val: "noun"},
    {label: "pronoun", val: "pronoun"},
    {label: "verb", val: "verb"},
    {label: "adjective", val: "adjective"},
    {label: "adverb", val: "adverb"},
    {label: "preposition", val: "preposition"},
    {label: "abbreviation", val: "abbreviation"},
    {label: "suffix", val: "suffix"},
    {label: "prefix", val: "prefix"},
];
/**
 */
class FavView extends PureComponent
{
    constructor( props )
    {
        super( props )
        this.state = {
            showWord: '',
            fav: false,
            type: '',
            sort_by_at: false
        }

    }

    render ()
    {
        // .sort((a,b) => a.word.localeCompare(b.word) )

        const fav_list = this.state.sort_by_at ?
            this.SortByAlphabet([...this.props.__dictionary.favList])
            : this.state.type ? this.FilterByType([...this.props.__dictionary.favList])
                : this.props.__dictionary.favList

        // console.log("fav_list",fav_list)

        return (

            <View style={{flex:1}}>

                <View style={{flexDirection: 'row'}}>

                    <View  style={customStyle.filterButton} >
                        <CustomPicker
                            animationType={"fade"}
                            items={listType}
                            prompt={'Select Type'}
                            val={this.state.type}
                            OnValueChange={(val) => this.OnTypeChange(val.val) }
                        />
                        {
                            this.state.type
                            ?
                            <TouchableOpacity
                                onPress={()=>this.setState({type: ''})}
                            >
                                <MaterialIcons name="close"  size={18} color={'#e50a00'}/>
                            </TouchableOpacity>
                            : null
                        }
                    </View>


                    <TouchableOpacity
                        style={[customStyle.filterButton,{backgroundColor: this.state.sort_by_at ? '#843272' : '#fff' }]}
                        onPress={()=>this.setState({sort_by_at: !this.state.sort_by_at, type: ''})}
                    >

                        <View>
                            <Text style={{color: this.state.sort_by_at ? '#fff' : '#000'}}>
                                Sort By Alphabet
                            </Text>
                        </View>
                    </TouchableOpacity>


                </View>
                <View style={{flex:1,marginTop: 25}}>
                    {
                        fav_list.length ?
                            <FlatList
                                data={fav_list}
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
                </View>

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
            <TouchableOpacity style={[customStyle.boxView,{flexDirection: 'row',  textAlign: 'right', alignSelf: 'stretch'}]}
                              onPress={()=>this.setState({showWord: item, fav: true})}
            >

                <View>
                    <Avatar
                        size={25}
                        rounded
                        overlayContainerStyle={{
                            backgroundColor: "rgba(75, 19, 79, 0.8)",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        titleStyle={{
                            fontSize:18,
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                        activeOpacity={0.7}
                        title={item.word.toUpperCase().charAt(0)}
                    />
                </View>


                <View style={{marginLeft: 40}}>
                    <Text style={{fontSize: 18}}>{item.word}</Text>
                </View>

            </TouchableOpacity>
        );
    };
    /**
     */
    OnTypeChange = async (val)=>
    {
        try
        {
            this.setState({type: val,sort_by_at: false})


        }
        catch (err)
        {

            return {err}
        }
    }
    /**
     */
    SortByAlphabet=(list)=>
    {

        const sort_arr = list.sort((a,b) => a.word.localeCompare(b.word) )

        return sort_arr
    }
    /**
     */
    FilterByType=(list)=>
    {

        const _arr = list.filter(d => d.definitions.find(c => c.type.toLowerCase() === this.state.type.toLowerCase() ));

        return _arr
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


