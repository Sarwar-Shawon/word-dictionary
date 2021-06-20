/**
 * @copyright Md. Sarwar Hoshen
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import reducers from './rdx/reducers';

const rdx_store = createStore( reducers, applyMiddleware(thunk) )
const rdx_persistor = persistStore( rdx_store )

import AppNavigator from './config/router';


/**
 */
class App extends React.PureComponent
{
  render()
  {
    return (
        <Provider store={rdx_store}>
          <PersistGate  persistor={rdx_persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
    )
  }
}

/**
 */
export default App ;
