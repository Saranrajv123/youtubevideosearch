import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Youtube from './components/Apis/Youtube';
import VideosList from './components/VidoesList';


class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  onVideSelect = (video) => {
    console.log(video)
  }

  onTermSubmit = async (term) => {
    // console.log(term)

    const response = await Youtube.get('/search', {
      params: {
        q: term,
      } 
    });

    console.log(response)
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideosList  onVideoSelect={this.onVideSelect} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
