import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'O',
      button1: '-',
      button2: '-',
      button3: '-',
      button4: '-',
      button5: '-',
      button6: '-',
      button7: '-',
      button8: '-',
      button9: '-',
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      turn: 'O',
      button1: '-',
      button2: '-',
      button3: '-',
      button4: '-',
      button5: '-',
      button6: '-',
      button7: '-',
      button8: '-',
      button9: '-',
    })
  }

  buttonClick(event) {
    const {name} = event.target
    const {turn} = this.state;
    if (turn === 'O') {
      this.setState({[name]: turn, turn: 'X'});

    }
    if (turn === 'X') {
      this.setState({[name]: turn, turn: 'O'});

    }
  }

  render() {
    const {button1, button2, button3, button4, button5, button6, button7, button8, button9} = this.state;
    return (
      <div>
        Hello world!!
        <div>
          <button onClick={(e) => this.buttonClick(e)} name={'button1'}>{button1}</button>
          <button onClick={(e) => this.buttonClick(e)} name={'button2'}>{button2}</button>
          <button onClick={(e) => this.buttonClick(e)} name={'button3'}>{button3}</button>
        </div>
        <div>
          <button onClick={(e) => this.buttonClick(e)} name={'button4'}>{button4}</button>
          <button onClick={(e) => this.buttonClick(e)} name={'button5'}>{button5}</button>
          <button onClick={(e) => this.buttonClick(e)} name={'button6'}>{button6}</button>
        </div>
        <div>
          <button onClick={(e) => this.buttonClick(e)} name={'button7'}>{button7}</button>
          <button onClick={(e) => this.buttonClick(e)} name={'button8'}>{button8}</button>
          <button onClick={(e) => this.buttonClick(e)} name={'button9'}>{button9}</button>
        </div>
        <button onClick={() =>this.reset()}>Reset</button>
      </div>
    )
  }
}
export default App;