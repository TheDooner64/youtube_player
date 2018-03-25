// React must always be imported when using JSX
import React, { Component} from 'react'

// Use the class based component, rather than a functional component, when you need some added functionality
class SearchBar extends Component {
  // Initialize the class component's state (functional components do not have state)
  // All classes have a special "constructor" function
  // It's the first and only function called automatically whenever a new instance of the class is created
  constructor(props) {
    // The parent (i.e. Component) also has its own constructor method
    // We can call that parent method on the parent class with "super"
    super(props);

    this.state = { 'term': '' };
  }

  // Every time the state changes, the component and its children will re-render
  render() {
    // All HTML elements like this emit a "change" event, which we'll point to our custom event handler
    // return <input onChange={this.onInputChange} />
    // When we set value={this.state.term}, this is a "controlled" component since the state determines the value
    // When the state changes, the component is re-rendered and the value is updated
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // Event handler method, which will run whenever the input changes
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;
