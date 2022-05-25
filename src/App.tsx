import React from 'react';
import Header from "./components/Header"
import Pokedex from "./components/Pokedex"
import { Provider } from 'react-redux'
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Pokedex />
    </Provider>
  )

};

export default App;
