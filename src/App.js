import React, { Component } from 'react';
import './App.css';

const string = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
const dataset = string.split(' ');
const sortedData = string.split(' ').sort((a,b) => a - b);
const flamingo = sortedData.map(each => Number(each));

console.log(flamingo);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      linCount: 0,
      binCount: 0
    };
  }

  mainSearch(e){
    e.preventDefault();
    this.linearSearch(Number(this.input.value));
    this.binarySearch(flamingo, Number(this.input.value));
  }

  linearSearch(input) {
    for (let i = 0; i < dataset.length; i++) {
      if (dataset[i] == input) {
        this.setState({
          linCount: i + 1
        })
        return;
      } 
    }
    console.log('linear number not found');
  }

  binarySearch(array, value, start=0, end=array.length-1, count=1) {
    // basecase

    console.log('start: ' + start, 'end: ' + end)
    if (start > end) {
      console.log('binary number not found', 'start: ' + start, 'end: ' + end);
      this.setState({
        binCount: count
      });
    }

    // find midpoint
    let index = Math.floor((start + end) /2);
    let middle = array[index];

    // if middle element is the target return index
    if (middle === value)  {
     this.setState({
      binCount: count
     });
    }

    // if the middle element is less than target, the target lies on the right, so eliminate left
    else if (middle < value) {
      return this.binarySearch(array, value, index+1, end, count +1)
    }

    // if middle el is greater than target the target is on the left
    else if (middle > value) {
      return this.binarySearch(array, value, start, index-1, count + 1);
    }

  };

  render() {
    // input box to search for a number
    // output box for number of iterations needed to find that number
    return (
      <div className="number-search">
        <form onSubmit={e => this.mainSearch(e)}>
        <label>Enter a number between 1 to 100
          <input type="search" ref={input => this.input = input} />
          <button>Search</button>
        </label>
        </form>
        <div className="results">
          Number of linear iterations occured is {this.state.linCount}
          <br />
          Number of binary iterations occured is {this.state.binCount}
        </div>
      </div>
    )
  }
}

export default App;
