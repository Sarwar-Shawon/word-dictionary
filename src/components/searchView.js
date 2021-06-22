/**
 * @copyright Md. Sarwar Hoshen
 */

import React, {PureComponent} from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    Alert,Platform

} from 'react-native';

import {connect} from 'react-redux'
import * as actions from '../rdx/actions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {customStyle} from "./common/customStyle";
import {Owlbot} from '../handler'
import WordView from './wordView'

/**
 */
class SearchView extends PureComponent
{
    constructor( props )
    {
        super( props )
        this.state = {

            search_word: '',
            find_word: '',
            bInit: false,
            fav: false
        }

    }
    /**
     */
    render ()
    {
        // console.log("this.props", this.props)

        return (

            <View style={{flex:1}}>
                <View style={{flexDirection: 'row', marginVertical: 15, margin: 20}}>

                    <View style={{flexDirection: 'row', flex:2,marginRight: 10, height: 35,borderWidth: 1, borderColor: "#000"}}>

                        <View style={{justifyContent: 'center', paddingLeft: 5}}>
                            <MaterialIcons name="search"  size={18} color={ '#000'}/>
                        </View>

                        <TextInput

                            style={Platform.OS === 'android' ? {height: 36} : {}}
                            autoCorrect={false}
                            placeholderTextColor="#b7b7b7"
                            placeholder="Search Dictionary"
                            value={this.state.search_word}
                            onChangeText={(text) => this.OnChange(text)}
                        />


                    </View>


                    <TouchableOpacity
                        onPress={()=>this.OnSearch()}
                        style={{flex:1}}
                    >
                        <View style={{height: 35,borderWidth: 1, borderColor: "#000", justifyContent: 'center', alignItems: 'center'}}>

                            <Text style={{color:'#000'}}>
                                Search
                            </Text>
                        </View>

                    </TouchableOpacity>

                </View>
                {
                    this.state.bInit
                    ?
                    <View style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size="large"
                                           color="#843272"
                        />
                    </View>
                    :
                    null
                }


                {
                    this.state.find_word === 'No words found'
                    ?
                    <View style={[customStyle.boxView,{justifyContent: 'center', alignItems: 'center', marginTop: 40}]}>

                        <MaterialCommunityIcons name="emoticon-sad-outline"  size={100} color={'#2d0648'}/>

                        <Text style={{fontSize: 20, fontWeight: "bold"}}>
                            Oops! No words found.
                        </Text>
                    </View>
                    :
                    this.state.find_word
                    ?
                    <View style={{flex:1}}>
                        <WordView
                            word={this.state.find_word}
                            fav={this.state.fav}
                            SetFav={(val)=>this.setState({fav: val})}
                        />
                    </View>

                    :
                    null
                }
            </View>

        )
    }

    /**
     */
    OnSearch = async ()=>
    {
        try
        {
            if(!this.state.search_word)
            {
                Alert.alert(
                    'Alert!!!',
                    'Please enter a word to search.',
                    [
                        {
                            text: 'OK', onPress: () => {}
                        },
                    ],
                    {cancelable: false}
                );
                return {}
            }
            const owl_bot = new Owlbot({})

            this.setState({bInit: true,find_word: '',fav: false})

            if(this.props.__dictionary.favList)
            {
                this.CheckFav()
                    .catch()
            }

            const search_data = await owl_bot.GetWords({text: this.state.search_word})

            console.log("search_data", search_data)

            this.setState({find_word: search_data, bInit: false})
        }
        catch (err)
        {

            return {err}
        }
    }
    /**
     */
    CheckFav = async ()=>
    {
        try
        {
            const findWord = this.props.__dictionary.favList.find(x=>x.word.toLowerCase() === this.state.search_word.toLowerCase())

            this.setState({fav: findWord ? true: false})

            // console.log("findWord",findWord)
        }
        catch (err)
        {

            return {err}
        }
    }
    /**
     */
    OnChange = (text)=>
    {
        try
        {
            console.log("text",text)

            this.setState({search_word: text.replace(/[^a-zA-Z]/g, "")})
            if(!text)
                this.setState({find_word: ''})

        }
        catch (err)
        {

            return {err}
        }
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


