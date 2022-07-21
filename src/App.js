import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Percentages: {
        
          Location: "",
          People: 0,
          Clients: 0,
          Percentage: 0
        
    }
  }
}

  async componentDidMount() {
  fetch("https://localhost:7039/Percentages")
    .then(res => {
      res.json().then(Percentages => this.setState({ Percentages }));
    })
  }

  render() {
    while (this.state.Percentages == null)
    {
      return "..."
    } 
    const Data = this.state.Percentages.Clients.toString();

  return (
      <div className="App">
        <div className='Percentages-Header'>
          <p>
            LongWood Gardens Visitors to Clients Ratios
          </p>
        </div>
        <div className='Percentages'>
          <p>
            {Data}
            </p>
        </div>

      </div>
    );
  }
}
//{this.Conservatory()}
export default App;