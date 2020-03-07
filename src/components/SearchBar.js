import React, { Component } from "react"; 

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' }
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term)
  }
  render() {
    
    return (
     <div className="ui segment">
       <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
                <label>Image Search</label>
                <input type="text" 
                value={this.state.term.toUpperCase()}
                onChange={ (e) => this.setState({term : e.target.value})}/>

            </div>
       </form>
     </div>
    );
  }
}

export default SearchBar;