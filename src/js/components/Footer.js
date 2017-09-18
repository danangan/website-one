// Libraries
import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { animateScroll } from 'react-scroll'
import {Table, Button} from 'reactstrap'
import store from '../store'

@connect((store) => {
    return {
	    s2_title 	: store.footer.s2_title,
	    s2_1 		: store.footer.s2_1,
	    s2_2 		: store.footer.s2_2,
	    s2_3 		: store.footer.s2_3,
	    s2_4 		: store.footer.s2_4,
	    s2_5 		: store.footer.s2_5,
	    s2_6 		: store.footer.s2_6,
	    s3_1 		: store.footer.s3_1
    };
})

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
		  	<div id='footer'>
		      <div class='top'>
		      	<div class='content row'>
		      		<div class='col-lg-4 col-xs-12 left hidden-md-down'>
		      			<div class='row'>
		      				<div class='col-xs-12 col-md-5 wrapper'>
		      					<img src='img/logo-transparent.png'/>
		      				</div>
		      				<div class='col-xs-12 col-md-7 wrapper'>
		      					<h3>ENERGY SOLUTION PROVIDER</h3>
		      				</div>
		      			</div>
		      		</div>
		      		<div class='col-lg-4 col-md-6 middle'>
					     <Table>
					        <thead>
					          <tr>
					            <th colSpan="2">{ this.props.s2_title}</th>
					          </tr>
					        </thead>
					        <tbody>
					          	<tr>
						            <td><Link to='/'>{ this.props.s2_1 }</Link></td>
						            <td><Link to='/about-us'>{ this.props.s2_2 }</Link></td>
					          	</tr>
					          	<tr>
						            <td><Link to='/portfolio'>{ this.props.s2_3 }</Link></td>
						            <td><Link to='/license'>{ this.props.s2_4 }</Link></td>
					          	</tr>
					       		<tr>
						            <td><Link to='gallery'>{ this.props.s2_5 }</Link></td>
						            <td><Link to='contact-us'>{ this.props.s2_6 }</Link></td>
					          	</tr>
					        </tbody>
					      </Table>
		      		</div>
		      		<div class='col-lg-4 col-md-6 right'>
		      			<Button class='to-top' onClick={()=>{animateScroll.scrollToTop()}}>
			      			<i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
			      			<span> { this.props.s3_1 }</span>
			      		</Button>
		      		</div>
		      	</div>
		      </div>
		      <div class='bottom'>
		      	<h3><i class="fa fa-copyright" aria-hidden="true"></i><span> 2017 PT Otto Nusantara Energy All Right are Reserved</span></h3>
		      </div>
		    </div>
		)
	}
}

export default Footer;