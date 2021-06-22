/**
 * @copyright Md. Sarwar Hoshen
 */

import React from 'react';

import {
    Text,
    View,
    TouchableOpacity, Modal, TouchableWithoutFeedback,Platform,FlatList,StyleSheet
} from 'react-native';


import MCIcon from "react-native-vector-icons/dist/MaterialCommunityIcons"
import {customStyle} from "./customStyle";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
/**
 */
class CustomPicker extends React.PureComponent
{
    /**
     */
    constructor( props )
    {
        super( props )

        this.state = {
            bModal: this.props.bOpen ? true : false,
        }
    }

    /**
     */
    render()
    {

        return (
            <View style={{height:50}}>

                <TouchableOpacity style={style.mainView}
                                  onPress={()=>this.setState({bModal: true})}
                                  disabled={this.props.bDisabled}

                >

                    <View style={{marginLeft: 20}}>
                        <Text style={{color:  '#000'}}>
                            {
                                this.props.val
                                    ?
                                    this.props.val
                                    :
                                    'Select a type'
                            }
                        </Text>
                    </View>
                    <View>
                        <MCIcon name='menu-down' size={25}/>

                    </View>
                </TouchableOpacity>

                <View>
                    {
                        this.state.bModal
                            ?
                            <Modal
                                animationType={this.props.animationType ? this.props.animationType : "slide"}
                                transparent={this.props.transparent ? this.props.transparent : true}
                                visible={this.state.bModal}
                                onRequestClose={() => {
                                    this.setState( {bModal: false} )
                                }}
                            >
                                <View style={{flex:1}}>
                                    <TouchableWithoutFeedback onPress={() => this.setState({bModal: false})}>
                                        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}></View>
                                    </TouchableWithoutFeedback>

                                    <View style={{height:"60%",backgroundColor:"#fff",padding :16}}>
                                        <View>
                                            {
                                                this.props.prompt
                                                ?
                                                <View style={{
                                                    paddingHorizontal: 15,
                                                    paddingVertical: 2,
                                                    borderRadius: 20,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    height: 30,
                                                    backgroundColor: '#325B84',
                                                    margin:10
                                                }}>
                                                    <Text allowFontScaling={false} style={{color: "#fff", fontSize: 14}}>
                                                        {this.props.prompt}
                                                    </Text>
                                                </View>

                                                :
                                                null
                                            }
                                        </View>
                                        <FlatList
                                            data={this.props.items}
                                            renderItem={this.RenderItem}
                                            keyExtractor={ (item, index) => item.key ? item.key : item.val ? item.val : index }
                                            style={{backgroundColor: '#fff'}}
                                        />
                                    </View>
                                </View>
                            </Modal>
                            :
                            null
                    }
                </View>
            </View>
        )
    }	// render

    /**
     */
    RenderItem = ({item}) =>
    {
        return (

            <TouchableOpacity
                style={customStyle.boxView}
                onPress={ () => {
                    if( this.props.OnValueChange )
                        this.props.OnValueChange( item )

                    this.setState( {bModal: false} )
                }}
                key={item.key}
            >
                {
                    this.props.RenderItem
                        ?
                        this.props.RenderItem( {item} )
                        :
                        <Text style={customStyle.appText}>{item.label}</Text>
                }

            </TouchableOpacity>
        )
    }
}	// class PickerEx

const style = StyleSheet.create({

    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textNormal: {
        fontSize: 12,
        color: "#303030"
    },

})

export {CustomPicker}
