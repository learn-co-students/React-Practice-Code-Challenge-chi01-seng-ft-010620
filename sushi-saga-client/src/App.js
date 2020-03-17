import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      index: 0,
      budget: 100
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      const updatedSushis = sushis.map(sushi => {
        return {...sushi, eaten: false}
      })
      this.setState({
        sushis: updatedSushis
      })
    })
  }

  changeIndex = () => {
    this.setState({
      index: this.state.index + 4
    })
  }

  eatSushi = (sushi) => {
    if (this.state.budget < sushi.price){
      alert("You Broke")
      return 
    }
    const updatedSushis = this.state.sushis.map(sush => {
      if (sush.id === sushi.id){
        return {...sush, eaten: true}
      } else {
        return sush
      }
    })
    this.setState({
      sushis: updatedSushis,
      budget: this.state.budget - sushi.price
    })
  }
  findEatenSushis = () => {
    return this.state.sushis.filter(sushi => {
      return (sushi.eaten)
    })
  }

  resetIndex = () => {
    this.setState({index: 0})
  }

  componentWillUpdate(prevProps, prevState){
    const {sushis, index} = prevState
    sushis.slice(index, index + 4).length === 0 ? this.resetIndex() : null;
  }

  render() {
    const {index, budget} = this.state
    const someSushis = this.state.sushis.slice(index, index + 4)
    
    return (
      <div className="app">
        <SushiContainer sushis={someSushis} changeIndex={this.changeIndex} eatSushi={this.eatSushi}/>
        <Table budget={budget} eatenSushis={this.findEatenSushis()}/>
      </div>
    );
  }
}

export default App;