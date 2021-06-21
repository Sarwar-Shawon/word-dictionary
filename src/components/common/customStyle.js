/**
 * @copyright Md. Sarwar Hoshen
 */

import React from 'react';
import {StyleSheet} from 'react-native';

/**
 */
export const customStyle = StyleSheet.create({

    headerStyle: {
        display: 'flex',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#325B84'
    },
    headerTextStyle:{
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize:24,
        fontWeight:'bold',
        color:'#ffffff',
    },
    searchButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000",
    },
    searchTextView: {

        borderWidth: 1,
        borderColor: "#000"
    },
    boxView: {
        borderRadius:8,
        padding:15,
        marginHorizontal:20,
        marginBottom:5,
        backgroundColor:"#fff",
        borderWidth: 0.5,
        borderColor: '#ddd',
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#ddd',
        shadowOpacity: 0.5
    }
})
