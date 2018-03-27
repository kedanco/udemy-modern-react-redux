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

import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail'

const API_KEY = 'AIzaSyCA8w4dPUX7BmOj4q3qq5uAzG1Hx-G_f0E';

// Create a new component. This component should produce some HTML

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
    
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        // passing prop videos to VideoList
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
