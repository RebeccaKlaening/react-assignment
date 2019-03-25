import React, { Component } from 'react';
import Quote from './components/Quote';
import Button from './components/Button';
import Name from './components/Name';
import './components/Button.css';
import './App.css';

class App extends Component {
    state = {
//
// quote: "",
// character: ""
};

componentDidMount() {
  this.fetchQuote();
}

fetchQuote = () => {
fetch("https://got-quotes.herokuapp.com/quotes")
  .then(res => res.json())
  .then(res => {
console.log(res.quote)
    this.setState({

quote: res.quote,
character: res.character

    });
  });
}

handleButtonClick = () => {
  this.fetchQuote();
};

render(){
console.log(this.state.quote)
console.log(this.state.character)
return (
<div className="App">

<div>
<Name>{this.state.character}</Name>
<Quote>{this.state.quote}</Quote>
</div>
<Button onClick={this.handleButtonClick} />
</div>
    )
  }
}

export default App
