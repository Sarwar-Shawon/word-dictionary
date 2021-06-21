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

import {customStyle} from "./common/customStyle";
import {Owlbot} from '../handler'

/**
 */
class SearchView extends PureComponent
{
    constructor( props )
    {
        super( props )
        this.state = {

            search_word: '',
            find_word: ''
        }

    }
    /**
     */
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


                    <View style={{flex:1, height: 35,borderWidth: 1, borderColor: "#000", justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity
                                          onPress={()=>this.onSearch()}
                        >
                            <Text style={{color:'#000'}}>
                                Search
                            </Text>

                        </TouchableOpacity>
                    </View>

                </View>

                {
                    this.state.find_word === 'No words found'
                    ?
                    <View>
                        <Text>
                            No words found
                        </Text>
                    </View>
                    :
                    this.state.find_word
                    ?
                    <WordView
                        word={this.state.find_word}
                    />
                    :
                    null
                }
            </View>

        )
    }

    /**
     */
    onSearch = async ()=>
    {
        try
        {
            const owl_bot = new Owlbot({})

            console.log("this.state.search_word",this.state.search_word)

            const search_data = await owl_bot.GetWords({text: this.state.search_word})

            console.log("search_data", search_data)

            this.setState({find_word: search_data})
        }
        catch (err)
        {

            return {err}
        }
    }
}   // SearchView

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
                <Text>Search Word: {word.word}</Text>

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
    RenderDef = ({ item }) => {
        return (
            <View style={{padding: 20, margin: 10}}>
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
                <Text>Type: {item.type}</Text>

                <Text>Definition: {item.definition}</Text>

                <Text>Example: {item.example}</Text>

            </View>
        );
    };
    /**
     */
    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }
}   // WordView

/**
 */
const mapStateToProps = (state) => {
    return state;
}   //

/**
 */
export default connect(mapStateToProps, actions)( SearchView )


