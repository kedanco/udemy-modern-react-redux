import React, { Component } from 'react';

// Functional Component
// const SearchBar = () => {
//   return <input />
// };

// Class-based Component
class SearchBar extends Component{
  // Every class-based react component must have a render method

  constructor(props){
    // Super references Parent class's constructor method
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
