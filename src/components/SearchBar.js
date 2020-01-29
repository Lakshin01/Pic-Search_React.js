import React, { Component } from "react"; 

class SearchBar extends Component {
  render() {
    return (
     <div className="ui segment">
       <div className="ui form">
            <div className="field">
                <label>Image Search</label>
                <input type="text" />

            </div>
       </div>
     </div>
    );
  }
}

export default SearchBar;