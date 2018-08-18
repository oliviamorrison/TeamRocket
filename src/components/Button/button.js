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
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Choose region</label>
            <select class="form-control" id="regionSelect">
              <option>Auckland</option>
              <option>Bay of Plenty</option>
              <option>Canterbury</option>
              <option>Hawke's Bay</option>
              <option>Manawatu-Wanganui</option>
              <option>Marlborough</option>
              <option>Nelson</option>
              <option>Northland</option>
              <option>Otago</option>
              <option>Southland</option>
              <option>Taranaki</option>
              <option>Tasman</option>
              <option>Waikato</option>
              <option>Wellington</option>
              <option>West Coast</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Type</label>
            <select class="form-control" id="type">
              <option>Beach</option>
              <option>River</option>
              <option>Lake</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Rating</label>
            <select class="form-control" id="rating">
              <option>Green</option>
              <option>Amber</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary mb-2">Apply</button>
        </form>
      </div>
    );
  }
}
