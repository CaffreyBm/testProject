import React, { Component } from "react";
import { Provider } from "react-redux";

import store from './store';
import Index from "./index.js";
const App = () => {
  
   return (
      <Provider store={store}>
           <Index />
      </Provider>
   );
};

export default App;
