import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/component/common';

class App extends Component {
  render() {
    return (
      <Provider store={createStore}>
        <View>
          <Header headerText="Tech Stack" />
        </View>
      </Provider>
    );
  }
}

export default App;
