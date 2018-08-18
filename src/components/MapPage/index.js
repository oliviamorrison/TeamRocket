import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import ReactMapGL from 'react-map-gl';

import {connect} from 'react-redux';

import ControlPanel from './water-colour-info.js';
import WaterPin from './WaterPin';
import WaterInfo from './WaterPin-info';

import WATER from '../../data/water.json';

const TOKEN = 'pk.eyJ1Ijoib2xpdmlhZWxtb3JyaXNvbiIsImEiOiJjamt5djFxNWgwbmpqM3FwNGV0cGdrNjQ3In0.w81xElNUbCXiagqbEMuStA';

class MapPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: -36.8470029,
        longitude: 174.7477795,
        zoom: 5,
        bearing: 0,
        pitch: 0,
        width: 800,
        height: 800,
      },
      popupInfo: null
    };
  }

  

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _renderWaterMarker = (city, index) => {
   return (
     <Marker key={`marker-${index}`}
       longitude={city.longitude}
       latitude={city.latitude} >
       <WaterPin size={20} onClick={() => this.setState({popupInfo: city})} />
     </Marker>
   );
 }

 _renderPopup() {
   const {popupInfo} = this.state;

   return popupInfo && (
     <Popup tipSize={5}
       anchor="top"
       longitude={popupInfo.longitude}
       latitude={popupInfo.latitude}
       onClose={() => this.setState({popupInfo: null})} >
       <WaterInfo info={popupInfo} />
     </Popup>
   );
 }

 render() {

   const {viewport} = this.state;

   return (
     <MapGL
       {...viewport}
       mapStyle="mapbox://styles/mapbox/basic-v9"
       onViewportChange={this._updateViewport}
       mapboxApiAccessToken={TOKEN} >

       { WATER.map(this._renderWaterMarker) }

       {this._renderPopup()}

       <ControlPanel containerComponent={this.props.containerComponent} />

     </MapGL>
   );
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getData: () => dispatch(UserActions.getData())
  }
}

function mapStateToProps(state) {
  return {
    jsonMockData: state.jsonMockData
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
