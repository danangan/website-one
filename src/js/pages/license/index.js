// Libraries
import React from 'react'
import { Collapse, Button, CardBlock, Card } from 'reactstrap'
import { connect } from 'react-redux'
import store from '../../store'

@connect((store) => {
    return {
    	active_language : store.app.active_language, 
    };
})


class License extends React.Component {
	constructor(){
		super();
		this.license_toggle = this.license_toggle.bind(this);
		this.membership_toggle = this.membership_toggle.bind(this);
		this.agencies_toggle = this.agencies_toggle.bind(this);
		this.state = {
			license_collapse 		: false,
			membership_collapse 	: false,
			agency_collapse 		: false,
		}
	}

	license_toggle() {
		this.setState({ license_collapse: !this.state.license_collapse });
	}

	membership_toggle() {
		this.setState({ membership_collapse: !this.state.membership_collapse });
	}

	agencies_toggle() {
		this.setState({ agency_collapse: !this.state.agency_collapse });
	}

	render(){
		let { active_language } = this.props;
		return (
		  	<div id='license'>
		  		<h1 class='title'>{ active_language=='ind' ? "Lisensi" : "Licenses"}</h1>
		      	<ul>
		      	<li class='toggle' onClick={ this.license_toggle }>
		      		<h4><span>{ active_language=='ind' ? "Lisensi" : "Licenses"} </span>
		      			{ !this.state.license_collapse && <i class='fa fa-plus' aria-hidden='true'></i> }
		      			{ this.state.license_collapse && <i class='fa fa-minus' aria-hidden='true'></i> }
		      		</h4>
		      	</li>
		      	<li>
			        <Collapse isOpen={this.state.license_collapse}>
		            	<ul class='documents'>
		            		<li>
		            			<a href='files/licenses/iujk.pdf' target='_blank'>Ijin Usaha Jasa Konstruksi</a>
		            		</li>
		            		<li>
		            			<a href='files/licenses/izin-niaga-gas.pdf' target='_blank'>Izin Niaga Gas</a>
		            		</li>
		            		<li>
		            			<a href='files/licenses/izin-impor.pdf' target='_blank'>Izin Impor</a>
		            		</li>
		            		<li>
		            			<a href='files/licenses/pengurus-perusahaan.pdf' target='_blank'>Identitas Pengurus Perusahaan</a>
		            		</li>
		            		<li>
		            			<a href='files/licenses/badan-usaha-pelaksana-konstruksi.pdf' target='_blank'>Sertifikat Badan Usaha Jasa Pelaksana Konstruksi</a>
		            		</li>
		            		<li>
		            			<a href='files/licenses/badan-usaha-pelaksana-konstruksi-2.pdf' target='_blank'>Sertifikat Badan Usaha Jasa Pelaksana Konstruksi</a>
		            		</li>
		            		<li>
		            			<a href='files/licenses/siup.pdf' target='_blank'>Surat Izin Usaha Perdagangan</a>
		            		</li>
		            		<li>
		            			<a href='files/licenses/tdp.pdf' target='_blank'>Tanda Daftar Perusahaan</a>
		            		</li>
		            		<li>
		            			<a href='files/licenses/perubahan-perseroan.pdf' target='_blank'>Perubahaan Data Perseroan</a>
		            		</li>
		            		<li>
		            			<a href='files/licenses/pengesahan-perseroan.pdf' target='_blank'>Pengesahan Badan Hukum Perseroan</a>
		            		</li>
		            	</ul>
			        </Collapse>
		      	</li>
		      	<li class='toggle' onClick={ this.membership_toggle }>
		      		<h4><span>{ active_language=='ind' ? "Keanggotaan" : "Memberships"} </span>
		      			{ !this.state.membership_collapse && <i class='fa fa-plus' aria-hidden='true'></i> }
		      			{ this.state.membership_collapse && <i class='fa fa-minus' aria-hidden='true'></i> }
		      		</h4>
		      	</li>
				<li>
			        <Collapse isOpen={this.state.membership_collapse}>
		            	<ul class='documents'>
		            		<li>
		            			<a href='files/membership/apcngi.pdf' target='_blank'>Asosiasi Perusahaan Compressed Natural Gas Indonesia</a>
		            		</li>
		            		<li>
		            			<a href='files/membership/asipebti.pdf' target='_blank'>Asosiasi Industri dan Pelaku Pengembangan Energi Baru Terbarukan Indonesia</a>
		            		</li>
		            		<li>
		            			<a href='files/membership/kta-b.pdf' target='_blank'>Kamar Dagang dan Industri</a>
		            		</li>
		            	</ul>
			        </Collapse>
		      	</li>
		      	<li class='toggle' onClick={ this.agencies_toggle }>
		      		<h4><span>{ active_language=='ind' ? "Agensi" : "Agencies"} </span>
	      				{ !this.state.agency_collapse && <i class='fa fa-plus' aria-hidden='true'></i> }
	      				{ this.state.agency_collapse && <i class='fa fa-minus' aria-hidden='true'></i> }
		      		</h4>
		      	</li>
				<li>
			        <Collapse isOpen={this.state.agency_collapse}>
		            	<ul class='documents'>  
		            		<li>
		            			<a href='files/agency/tecobar.pdf' target='_blank'>Tecobar</a>
		            		</li>
		            		<li>
		            			<a href='files/agency/holduct.pdf' target='_blank'>Holduct</a>
		            		</li>
		            	</ul>
			        </Collapse>
		      	</li>
		      </ul>
		    </div>
		)
	}
}

export default License;