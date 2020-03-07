import React, { Component } from "react"; 
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImagesList from "./imagesList";

class App extends Component {
  state = { images : [] };
   onSearchSubmit = async (term) => {
    const result = await unsplash.get('/search/photos/', {
      params : { query: term }, 
    });
    this.setState({ images:result.data.results })
  };


  render() {
    return (
     <div className="ui container" style={{ marginTop: "30px" }}>
     
       <SearchBar onSubmit={this.onSearchSubmit} />
        <ImagesList images={ this.state.images }/>
         </div>
    );
  }
}

export default App;