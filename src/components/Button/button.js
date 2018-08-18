import React, { Component } from 'react';

export default class Button extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   label: 1,
    // };
  }


  componentDidMount() {
    //This is often used to make asynchronous calls like http requests
    console.log('Button component mounted!');
  }

  // shouldComponentUpdate() {
  //   return this.state.label % 2
  // }

  handleClick() {
    // this.setState({ label: this.state.label + 1 })
  }

  render() {

    return (
      <div>
        <h1> {this.props.title}</h1>
        {/* <button
          className="btn btn-default"
          onClick={() => { this.handleClick() }}>
          {this.state.label}
        </button> */}
        <div class="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Choose region
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Auckland</a>
            <a class="dropdown-item" href="#">Bay of Plenty</a>
            <a class="dropdown-item" href="#">Canterbury</a>
            <a class="dropdown-item" href="#">Hawke's Bay</a>
            <a class="dropdown-item" href="#">Manawatu-Wanganui</a>
            <a class="dropdown-item" href="#">Marlborough</a>
            <a class="dropdown-item" href="#">Nelson</a>
            <a class="dropdown-item" href="#">Northland</a>
            <a class="dropdown-item" href="#">Otago</a>
            <a class="dropdown-item" href="#">Southland</a>
            <a class="dropdown-item" href="#">Taranaki</a>
            <a class="dropdown-item" href="#">Tasman</a>
            <a class="dropdown-item" href="#">Waikato</a>
            <a class="dropdown-item" href="#">Wellington</a>
            <a class="dropdown-item" href="#">West Coast</a>
          </div>
        </div>
        <div class="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Type
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Beach</a>
            <a class="dropdown-item" href="#">River</a>
            <a class="dropdown-item" href="#">Lake</a>
          </div>
        </div>
        <div class="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Rating
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Green</a>
            <a class="dropdown-item" href="#">Amber</a>
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Apply</button>

      </div>
    );
  }
}
