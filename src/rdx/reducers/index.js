/**
 * @copyright Md. Sarwar Hoshen
 */

import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'

import Dictionary from './Dictionary'

/**
 */
const persist_cfg = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        '__dictionary',
    ],
}

/**
 */
const rdx_reduers = combineReducers( {
    __dictionary: Dictionary,

})

/**
 */
export default persistReducer( persist_cfg, rdx_reduers )


