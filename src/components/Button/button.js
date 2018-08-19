import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

export default class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      json: null,
      regionSelect: "Auckland",
      type: "Beach",
      rating: "Green",
      isSubmitted: false,
    };
  }

  componentDidMount() {
    fetch("./json.json")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({ json: myJson });
      });

    console.log('Button component mounted!');
  }

  searchBy = (place) => {
    var isRegion = (this.state.regionSelect + " region" === place.Region)
    var isType = (this.state.type === place.SiteType)
    var isRating = (this.state.rating === place["Swim Icon Result"])

    return (isRegion && isType && isRating);
  }

  filterResult = unfilteredResult => {
    const filtered = unfilteredResult.reduce((acc, cur) => {
      acc[cur.SiteName] = cur;
      return acc;
    }, {});

    return Object.keys(filtered).map(key => filtered[key]);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.regionSelect);
    console.log(this.state.type);
    console.log(this.state.rating);

    var results = this.state.json.filter(this.searchBy);
    const filtered = this.filterResult(results);

    var finalResults = filtered.slice(0, Math.min(100, results.length));
    console.log(finalResults);

    this.setState({ isSubmitted: true });

  }

  handleRegion = (event) => {
    console.log(event.target.value);
    this.setState({ regionSelect: event.target.value });
  }

  handleType = (event) => {
    console.log(event.target.value);
    this.setState({ type: event.target.value });
  }

  handleRating = (event) => {
    console.log(event.target.value);
    this.setState({ rating: event.target.value });
  }

  renderRedirect = () => {
    var url = `/map?region=${this.state.regionSelect}&type=${this.state.type}&rating=${this.state.rating}`;
    if (this.state.isSubmitted) {
      return <Redirect to={url} />
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.renderRedirect()}
        </div>
        <div>
          <h1> {this.props.title}</h1>
          <form onSubmit={(e) => { this.handleClick(e) }}>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Choose region</label>
              <select class="form-control" id="regionSelect" value={this.state.regionSelect} onChange={(this.handleRegion)}>
                <option>Auckland</option>
                <option>Bay of Plenty</option>
                <option>Canterbury</option>
                <option>Hawkes Bay</option>
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
              <select class="form-control" id="type" value={this.state.type} onChange={(this.handleType)}>
                <option>Beach</option>
                <option>River</option>
                <option>Lake</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Rating</label>
              <select class="form-control" id="rating" value={this.state.rating} onChange={(this.handleRating)}>
                <option>Green</option>
                <option>Amber</option>
              </select>
            </div>
            <div className = "applydiv">
            <button type="submit" class="apply">Apply</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
