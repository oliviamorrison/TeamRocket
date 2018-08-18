import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    const {info} = this.props;
    const displayName = `${info.name}`;
    const region = `${info.region}`;
    const rating = `${info.rating}`;
    const type = `${info.type}`;

    return (
      <div className= "pinPopUp">
        <div>
          <p>{displayName}</p>
          <p>{region}</p>
          <p>{rating}</p>
        </div>
      </div>
    );
  }
}
