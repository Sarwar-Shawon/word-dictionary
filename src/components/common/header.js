/**
 * @copyright Md. Sarwar Hoshen
 */

import React from 'react';

import {
    View, SafeAreaView, ScrollView,
    Text,
    Image,StatusBar
} from "react-native"

import {customStyle} from "./customStyle";

/**
 */
class PageHeader extends React.PureComponent
{
    constructor( props )
    {
        super( props )
    }

    render()
    {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor:"#ffffff"}}>
                <>
                    <StatusBar
                        backgroundColor={"#ffffff"}
                        color={"#ffffff"}
                        barStyle="dark-content"
                    />
                </>

                <>
                    <View style={customStyle.headerStyle}>
                        <View>
                            <Text allowFontScaling={false}
                                  style={customStyle.headerTextStyle}
                            >
                                Word Dictionary
                            </Text>
                        </View>
                    </View>
                </>


                <View style={{flex: 1}}>
                    {
                        this.props.children
                    }
                </View>

            </SafeAreaView>
        )
    }
}	// class Chat_Hdr


//
export default PageHeader

