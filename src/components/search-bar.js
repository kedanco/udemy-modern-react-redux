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
      <div>
        <input onChange={e => this.setState({ term: e.target.value})} />
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
