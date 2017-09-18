// Libraries
import React from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"
import { connect } from 'react-redux'
import store from '../../store'

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    center={props.center}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

@connect((store) => {
    return {
      active_language : store.app.active_language, 
    };
})

class Contact extends React.Component {
	constructor(){
		super();
		this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleMapMounted = this.handleMapMounted.bind(this);
	}

	handleMapLoad(map) {
		this._mapComponent = map;
			if (map) {
		}
	}

	handleMapMounted(map) {
		this._map = map;
	}

	render(){
		let location = "Pondok Labu";
        let lat = -6.297411;
        let lng = 106.794106;
        let center = {
          lat: lat,
          lng: lng,
        };
        let markers = [{
          position: {
            lat: lat,
            lng: lng,
          },
          key: location,
          defaultAnimation: 2,
        }];

		let head_location = "Puri Indah";
        let head_lat = -7.448241;
        let head_lng = 112.686305;
        let head_center = {
          lat: head_lat,
          lng: head_lng,
        };
        let head_markers = [{
          position: {
            lat: head_lat,
            lng: head_lng,
          },
          key: head_location,
          defaultAnimation: 2,
        }];

    let { active_language } = this.props;
		return (
		  	<div id='contact-us'>
		      <h1 class='title'>{ active_language=='ind' ? "Hubungi Kami" : "Contact Us "}</h1>
		      <div class='row'>
		      	<div class='col-lg-8'>
		      		<h2 class='subtitle'>{ active_language=='ind' ? "Kunjungi kantor kami" :  "Visit or contact our offices" }</h2>
		      		<div class='row location'>
		      			<div class='col-md-6'>
		      				<GettingStartedGoogleMap class='map'
                                  containerElement={
                                    <div style={{ height: `250px` }} />
                                  }
                                  mapElement={
                                    <div style={{ height: `250px` }} />
                                  }
                                  onMapLoad={this.handleMapLoad}
                                  onMapMounted={this.onMapMounted}
                                  markers={markers}
                                  center={center}
                                  lat={lat}
                                  lng={lng}

                            />
		      			</div>
		      			<div class='col-md-6 address'>
		      				<h4>{ active_language=='ind' ? "Kantor Cabang" : "Branch Office"}</h4>
		      				<h5>Fatmawati Festival Blok A-6</h5>
		      				<h5>RS Fatmawati No. 50 Cilandak</h5>
		      				<h5>Jakarta Selatan 12420</h5>
		      				<h5>Phone : 021 - 7590 3380</h5>
		      				<h5>Fax : 021 - 7663 477</h5>
		      			</div>
		      		</div>
		      		<div class='row location'>
		      			<div class='col-md-6'>
		      				<GettingStartedGoogleMap 
                                  containerElement={
                                    <div style={{ height: `250px` }} />
                                  }
                                  mapElement={
                                    <div style={{ height: `250px` }} />
                                  }
                                  onMapLoad={this.handleMapLoad}
                                  onMapMounted={this.onMapMounted}
                                  markers={head_markers}
                                  center={head_center}
                                  lat={head_lat}
                                  lng={head_lng}
                            />
		      			</div>
		      			<div class='col-md-6 address'>
		      				<h4>{ active_language=='ind' ? "Kantor Pusat" : "Head Office" }</h4>
		      				<h5>Puri Indah Blok E-10</h5>
		      				<h5>Suko, Sidoarjo</h5>
		      				<h5>Jawa Timur</h5>
		      				<h5>Phone : 031 - 896 8197</h5>
		      				<h5>Fax : 031 - 807 7397</h5>
		      			</div>
		      		</div>
		      	</div>
		      	<div class='col-lg-4'>
		      		<h2 class='subtitle'>{ active_language=='ind' ? "Atau Kirim Email" : "Or Send Us Email" }</h2>
		      		<h4>{ active_language=='ind' ? "Narahubung" :  "Contact Person"}</h4>
		      		<h5 class='name'>Trisusilohadi</h5>
		      		<h5>trisusilohadi@ottonusantara.co.id</h5><br/>
		      		<h5 class='name'>Danang Arbansa Nur</h5>
		      		<h5>danang@ottonusantara.co.id</h5>
		      	</div>
		      </div>
		    </div>
		)
	}
}

export default Contact;