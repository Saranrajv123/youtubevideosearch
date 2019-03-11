import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Youtube from './components/Apis/Youtube';
import VideosList from './components/VidoesList';
import VideoDetail from './components/VideoDetail';


class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.onTermSubmit('search')
  }
  onVideSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  onTermSubmit = async (term) => {
    // console.log(term)

    const response = await Youtube.get('/search', {
      params: {
        q: term,
      }
    });

    console.log(response)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList onVideoSelect={this.onVideSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
