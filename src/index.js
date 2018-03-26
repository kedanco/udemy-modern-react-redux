// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));


import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyCA8w4dPUX7BmOj4q3qq5uAzG1Hx-G_f0E';

// Create a new component. This component should produce some HTML

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

//Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
