/**
 * @copyright Md. Sarwar Hoshen
 */

import React, {PureComponent} from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList

} from 'react-native';

import {connect} from 'react-redux'
import * as actions from '../rdx/actions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/**
 */
class WordView extends PureComponent
{
    constructor( props )
    {
        super( props )
        this.state = {

        }

    }
    /**
     */
    render ()
    {
        const {word} = this.props
        return (

            <View style={{margin: 20}}>

                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>Word : {word.word}</Text>
                    </View>

                    <View style={{flex:1, position: 'absolute',right: 0,}}>
                        <TouchableOpacity
                            onPress={()=>this.AddToFav(word)}
                        >
                            <MaterialIcons name="favorite"
                                           size={30}
                                           color={ this.props.fav ? '#e50a00' : '#aca5ae'}
                            />

                        </TouchableOpacity>
                    </View>

                </View>

                <FlatList
                    data={word.definitions}
                    renderItem={this.RenderDef}
                    keyExtractor={ ( item,index ) => index.toString() }
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                />

            </View>

        )
    }
    /**
     */
    RenderDef = ({ item }) =>
    {
        return (
            <View style={{padding: 20, margin: 5}}>
                {
                    item.image_url &&
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                            marginLeft: "auto",
                            marginRight: "auto",
                            borderRadius:50
                        }}
                        source={{uri: item.image_url}}
                    />
                }
                <Text style={{marginBottom:10,fontSize: 18}}>{item.type}</Text>

                <Text style={{marginBottom:10,fontSize: 18}}>{item.definition}</Text>

                {
                    item.example &&
                    <Text style={{fontSize: 18, color:'#726b74'}}>"{item.example}"</Text>

                }

            </View>
        );
    };
    /**
     */
    FlatListItemSeparator = () =>
    {
        return (
            <View
                style={{
                    height: 2,
                    marginLeft: 20,
                    width: "80%",
                    backgroundColor: "#5e5960",
                }}
            />
        );
    }
    /**
     */
    AddToFav = async (word)=>
    {
        try
        {
            if(this.props.fav)
                this.props.Rdx_Upd_Fav(word)
            else
                this.props.Rdx_Add_Fav(word)

            this.props.SetFav(!this.props.fav)
        }
        catch (err)
        {

            return {err}
        }
    }
}   // WordView

/**
 */
const mapStateToProps = (state) => {
    return state;
}   //

/**
 */
export default connect(mapStateToProps, actions)( WordView )


