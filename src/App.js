import MainComponent from './components/MainComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './reducer/configureStore';

const storeData = ConfigureStore();

function App() {
  return (
    <Provider store={storeData}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
