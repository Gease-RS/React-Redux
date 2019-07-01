import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Aplicacao from './components/Aplicacao';

class App extends Component {

    render() {
        return(
            <Provider>
                <div className="App">
                    <Aplicacao />
                </div>
            </Provider>
        );
    }
       
}

export default App