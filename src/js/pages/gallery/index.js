// Libraries
import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'

@connect((store) => {
    return {
    	active_language : store.app.active_language, 
    };
})


class Gallery extends React.Component {
	constructor(){
		super();
	}

	render(){
		let { active_language } = this.props;
		return (
		  	<div id='gallery'>
		      <h1 class='title'>{ active_language =='ind' ? "Galeri" : "Gallery" }</h1>
		      <div class='content'>
		      {/* CNG ROW 1 */}
		      	<div class='row'>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Armada 10 ft siap berangkat" : "10 ft Fleet Ready to Go"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/1/1.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Armada 10 ft di Plant" : "10 ft Fleet at Plant"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/1/2.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Armada 40 ft saat mengisi di Plant" : "40 ft Fleet Loading at Plant"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/1/3.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Armada 40 ft parkir di plant" : "40 ft Fleet Parked in Plant"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/1/4.jpg'/>
			      		</div>
			      	</div>
		      	</div>

		      {/* CNG ROW 2 */}
		      	<div class='row'>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "PRS Agrokusuma 1000 m3/jam" : "1000 m3/Hour PRS at Agrokusuma"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/2/1.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "2 Armada 40 ft Unloading di Happytos" : "40 ft Fleet Unloading at Happytos"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/2/2.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "PRS Happytos 1500 m3/jam" : "1500 m3/Hour PRS at Happytos"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/2/3.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Turbin Meter Dilengkapi  EVC Standard Turbin Meter" : "Turbine Meter Equipped with Standard Turbine Meter EVC"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/2/4.jpg'/>
			      		</div>
			      	</div>
		      	</div>

		      {/* CNG ROW 3 */}
		      	<div class='row'>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Panel Electric Terpisah dari Area PRS" : "Electrical Panel Separated form PRS Area"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/3/1.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Pemasangan Flexible Hose 40 ft" : "40 ft Flexible Hose Installation"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/3/2.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Gas Monitoring oleh Operator" : "Gas Monitoring by Operator"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/3/3.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Mengikat Flexible Hose (safety concern)" : "Binding Flexible Hose for Safety Concern"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/3/4.jpg'/>
			      		</div>
			      	</div>
		      	</div>

		      {/* CNG ROW 4 */}
		      	<div class='row'>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Unloading 20 ft di Perhutani Aneka Kimia" : "Unloading 20 ft Fleet at Perhutani Aneka Kimia"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/4/1.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Sisa Pembakaran dengan CNG yang Bersih di PAK" : "Clean Combustion Residue (using CNG) at PAK"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/4/2.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "PRS PAK 750 m3/jam" : "750 m3/Hour PRS at PAK"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/4/3.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Unloading 10 ft di PGT" : "Unloading 10 ft Fleet at PGT"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/4/4.jpg'/>
			      		</div>
			      	</div>
		      	</div>

		      {/* CNG ROW 5 */}
		      	<div class='row'>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Panel Listrik Terpisah dari PRS" : "Electrical Panel Separated form PRS Area"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/5/1.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Menjaga Kontinuitas supply: 2 unit 10 ft" : "Maintaining Supply Continuity : 2 Unit of 10 Ft Fleet"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/5/2.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Turbin Meter Dilengkapi EVC std Metering System" : "Turbine Meter Equipped with Metering System Standard EVC"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/5/3.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Buffering System untuk Kebutuhan 200-400 m3/hari" : "Buffering System for 200-400 m3/day Demand"}</h5>
				      		</div>
				      		<img src ='img/gallery/cng/5/4.jpg'/>
			      		</div>
			      	</div>
		      	</div>

		      	{/* ROW 1 DIRJEN PAJAK */}
		      	<div class='row'>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Dirjen Pajak" : "Dirjen Pajak Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/pjk/1.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Dirjen Pajak" : "Dirjen Pajak Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/pjk/2.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Dirjen Pajak" : "Dirjen Pajak Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/pjk/3.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Dirjen Pajak" : "Dirjen Pajak Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/pjk/4.jpg'/>
			      		</div>
			      	</div>
		      	</div>

		      	{/* ROW 2 CIKARANG */}
		      	<div class='row'>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Cikarang Listrindo" : "Cikarang Listrindo Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/ckr/1.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Cikarang Listrindo" : "Cikarang Listrindo Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/ckr/2.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Cikarang Listrindo" : "Cikarang Listrindo Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/ckr/3.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Cikarang Listrindo" : "Cikarang Listrindo Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/ckr/4.jpg'/>
			      		</div>
			      	</div>
		      	</div>

		      {/* PROYEK MEGA KUNINGAN */}
		      	<div class='row'>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Mega Kuningan" : "Mega Kuningan Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/kng/1.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Mega Kuningan" : "Mega Kuningan Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/kng/2.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Mega Kuningan" : "Mega Kuningan Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/kng/3.jpg'/>
			      		</div>
			      	</div>
			      	<div class='col-md-6 col-lg-3'>
			      		<div class='wrapper'>
				      		<div class='text-wrapper'>
				      			<h5 class='text'>{ active_language == 'ind' ? "Proyek Mega Kuningan" : "Mega Kuningan Project"}</h5>
				      		</div>
				      		<img src ='img/gallery/kng/4.jpg'/>
			      		</div>
			      	</div>
		      	</div>

		      </div>
		    </div>
		)
	}
}

export default Gallery;