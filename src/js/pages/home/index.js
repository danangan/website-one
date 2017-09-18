// Libraries
import React from 'react'
import { connect } from 'react-redux'
import { Link, Element } from 'react-scroll'
import { push } from 'react-router-redux'
import { Collapse, Button, CardBlock, Card } from 'reactstrap'
import store from '../../store'

@connect((store) => {
    return {
		s1_button        : store.home.s1_button,
		s2_title         : store.home.s2_title,
		s2_content       : store.home.s2_content,
		s3_title         : store.home.s3_title,
		s3_1             : store.home.s3_1,
		s3_1_content  	 : store.home.s3_1_content,
		s3_2             : store.home.s3_2,
		s3_2_content     : store.home.s3_2_content,
		s3_3             : store.home.s3_3,
		s3_3_content     : store.home.s3_3_content,
		s3_4             : store.home.s3_4,
		s3_4_content     : store.home.s3_4_content,
		s4_title         : store.home.s4_title,
		s4_1             : store.home.s4_1,
		s4_2             : store.home.s4_2,
		s4_3             : store.home.s4_3,
		s4_4             : store.home.s4_4,
		s4_5             : store.home.s4_5,
		s5_title         : store.home.s5_title,
		s5_1             : store.home.s5_1,
		s5_1_content_1   : store.home.s5_1_content_1,
		s5_1_content_2   : store.home.s5_1_content_2,
		s5_1_content_3   : store.home.s5_1_content_3,
		s5_1_content_4   : store.home.s5_1_content_4,
		s5_2             : store.home.s5_2,
		s5_2_content_1   : store.home.s5_2_content_1,
		s5_2_content_2   : store.home.s5_2_content_2,
		s5_2_content_3   : store.home.s5_2_content_3,
		s5_3             : store.home.s5_3,
		s5_3_content_1   : store.home.s5_3_content_1,
		s5_3_content_2   : store.home.s5_3_content_2,
		s5_3_content_3   : store.home.s5_3_content_3,
		s5_3_content_4   : store.home.s5_3_content_4,
		s5_3_content_5   : store.home.s5_3_content_5,
		s5_3_content_6   : store.home.s5_3_content_6,
		s5_button        : store.home.s5_button,
		s6_title 		 : store.home.s6_title
    };
})

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.portfolio 			= this.portfolio.bind(this);
    this.service_toggle 	= this.service_toggle.bind(this);
    this.competitive_toggle = this.competitive_toggle.bind(this);
    this.cooperative_toggle = this.cooperative_toggle.bind(this);
    this.competent_toggle 	= this.competent_toggle.bind(this);
    this.state = { 
    				service_collapse: false,
    				competitive_collapse:false,
    				cooperative_collapse:false,
    				competent_collapse:false };
 				}

	service_toggle() {
	    this.setState({ service_collapse: !this.state.service_collapse });
	}

	competitive_toggle() {
	    this.setState({ competitive_collapse: !this.state.competitive_collapse });
	}

	cooperative_toggle() {
	    this.setState({ cooperative_collapse: !this.state.cooperative_collapse });
	}

	competent_toggle() {
	    this.setState({ competent_collapse: !this.state.competent_collapse });
	}

	portfolio(){
		this.props.dispatch(push('/portfolio'));
	}

  	render(){
  		let { 	s1_button, 
  				s2_title, 
  				s2_content, 
  				s3_title, 
  				s3_1, 
  				s3_1_content, 
  				s3_2, 
  				s3_2_content, 
  				s3_3, 
  				s3_3_content, 
  				s3_4, 
  				s3_4_content,
  				s4_title,
  				s4_1,
  				s4_2,
  				s4_3,
  				s4_4,
  				s4_5,
  				s5_title,
  				s5_1,
  				s5_2,
  				s5_3,
  				s5_1_content_1,
  				s5_1_content_2,
  				s5_1_content_3,
  				s5_1_content_4,
  				s5_2_content_1,
  				s5_2_content_2,
  				s5_2_content_3,
  				s5_3_content_1,
  				s5_3_content_2,
  				s5_3_content_3,
  				s5_3_content_4,
  				s5_3_content_5,
  				s5_3_content_6,
  				s5_button,
  				s6_title,
  			} = this.props;
	  	
	  	return (
		  	<div id='home'>
		  		<div id='section-one'>
		  			<div class='content'>
		  				<img src='img/logo-transparent.png' alt='logo' class='hidden-lg-up logo'/>
			  			<h1><img src='img/logo-transparent.png' alt='logo' class='hidden-md-down'/>OTTO NUSANTARA ENERGY</h1>
			  			<h2>Energy Solution Provider</h2>
			  			<div class='wrapper'>
			  				<Link to="to" spy={true} smooth={true} offset={50} duration={1000} class='green-default'>
			  					<Button class='green-default'>
			  						{ s1_button }
			  					</Button>
			  				</Link>
			  			</div>
		  			</div>
		  		</div>
		  		<Element name = 'to' >
		  		<div id='section-two' class='container-fluid'>
		  			<div class='content row'>
		  				<div class='col-lg-4 offset-lg-1 img-container'>
		  					<img src='img/logo-ornamen.png'class='animate'/>
		  				</div>
		  				<div class='col-lg-6 text-container'>
		  					<div class='wrapper'>
		  					  	<h2 class='title'>{ s2_title }</h2>
			  					<h4>{ s2_content }</h4>
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  		</Element>
		  		<div id='section-three'>
		  			<div class='content row'>
		  				<div class='col-lg-8 offset-lg-2 col-md-10 offset-md-1'>
		  					<h2 class='title'>{ s3_title }</h2>
		  					<div class='row'>
		  						<div class='col-md-6'>
		  							<ul>
		  								<li>
		  									<Button onClick={this.competitive_toggle}>
		  										{ s3_3 }
		  										<br/>
										        <Collapse isOpen={this.state.competitive_collapse}>
										          <Card>
										            <CardBlock>
									            		{ s3_3_content }
										            </CardBlock>
										          </Card>
										        </Collapse>		  										
		  									</Button>
		  								</li>
		  								<li>
		  									<Button onClick={this.service_toggle}>
		  										{ s3_1 }
		  										<br/>
										        <Collapse isOpen={this.state.service_collapse}>
										          <Card>
										            <CardBlock>
										            	{ s3_1_content }
										            </CardBlock>
										          </Card>
										        </Collapse>
		  									</Button>
		  								</li>
		  							</ul>
		  						</div>
		  						<div class='col-md-6'>
									<ul>
		  								<li> 
		  									<Button onClick={this.cooperative_toggle}>
		  										{ s3_2 }
		  										<br/>
										        <Collapse isOpen={this.state.cooperative_collapse}>
										          <Card>
										            <CardBlock>
										            	{ s3_2_content }
										            </CardBlock>
										          </Card>
										        </Collapse>		  										
		  									</Button>
		  								</li>
		  								<li>
		  									<Button onClick={this.competent_toggle}>
		  										{ s3_4 }
		  										<br/>
										        <Collapse isOpen={this.state.competent_collapse}>
										          <Card>
										            <CardBlock>
										            	{ s3_4_content }
										            </CardBlock>
										          </Card>
										        </Collapse>		  										
		  									</Button>		  									
		  								</li>
		  							</ul>
		  						</div>
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  		<div id='section-four'>
		  			<div class='content'>
		  				<h2 class='title'> { s4_title }</h2>
		  				<div class='row'>
			  				<div class='col-md-4 col-lg-2 offset-lg-1 item'>
			  					<div class='wrapper'>
				  					<img class='icon' src='img/icon/consulting.png'/>
				  					<h4 class='desc'>
				  						{ s4_1 }
				  					</h4>
				  				</div>
			  				</div>
			  				<div class='col-md-4 col-lg-2 item'>
			  					<div class='wrapper'>
				  					<img class='icon' src='img/icon/solution.png'/>
				  					<h4 class='desc'>
				  						{ s4_2 }
				  					</h4>
			  					</div>
			  				</div>
			  				<div class='col-md-4 col-lg-2 item'>
			  					<div class='wrapper'>
				  					<img class='icon' src='img/icon/payback.png'/>
				  					<h4 class='desc'>
				  						{ s4_3 }
				  					</h4>
				  				</div>
			  				</div>
			  				<div class='col-md-4 offset-md-2 offset-lg-0 col-lg-2 item'>
			  					<div class='wrapper'>
				  					<img class='icon' src='img/icon/system.png'/>
				  					<h4 class='desc'>
				  						{ s4_4 }
				  					</h4>
				  				</div>
			  				</div>
			  				<div class='col-md-4 col-lg-2 item'>
			  					<div class='wrapper'>
				  					<img class='icon' src='img/icon/operation.png'/>
				  					<h4 class='desc'>
				  						{ s4_5 }
				  					</h4>
			  					</div>
			  				</div>  				
		  				</div>
		  			</div>
		  		</div>
		  		<div id='section-five'>
		  			<div class='content'>
		  				<h2 class='title'>{ s5_title }</h2>
		  				<div class='row'>
		  					<div class='col-md-6 offset-md-3 offset-lg-0 col-lg-4'>
		  						<div class='round'>
		  							<div class='flipper'>
		  								<div class='front'>
		  				  					<img class='icon' src='img/icon/fire.png'/>
				  							<h4 class='desc'>{ s5_1 }</h4>					
		  								</div>
		  								<div class='back'>
		  									<div class='wrapper'>
		  										<h5>{ s5_1_content_1 }</h5>
					  							<h5>{ s5_1_content_2 }</h5>	
					  							<h5>{ s5_1_content_3 }</h5>
					  							<h5>{ s5_1_content_4 }</h5>
		  									</div>
		  								</div>
		  							</div>
		  						</div>
		  					</div>
		  					<div class='col-md-6 col-lg-4'>
		  						<div class='round'>
		  							<div class='flipper'>
		  								<div class='front'>
					  						<img class='icon' src='img/icon/chat.png'/>
				  							<h4 class='desc'>{ s5_2 }</h4>					
		  								</div>
		  								<div class='back'>
		  									<div class='wrapper'>
		  										<h5>{ s5_2_content_1 }</h5>
					  							<h5>{ s5_2_content_2 }</h5>	
					  							<h5>{ s5_2_content_3 }</h5>
		  									</div>
		  								</div>
		  							</div>
		  						</div>
		  					</div>
		  					<div class='col-md-6 col-lg-4'>
		  						<div class='round'>
		  							<div class='flipper'>
		  								<div class='front'>
			  								<img class='icon' src='img/icon/flash.png'/>
				  							<h4 class='desc'>{ s5_3 }</h4>					
		  								</div>
		  								<div class='back'>
		  									<div class='wrapper'>
		  										<h5>{ s5_3_content_1 }</h5>
					  							<h5>{ s5_3_content_2 }</h5>	
					  							<h5>{ s5_3_content_3 }</h5>
					  							<h5>{ s5_3_content_4 }</h5>
					  							<h5>{ s5_3_content_5 }</h5>
					  							<h5>{ s5_3_content_6 }</h5>
		  									</div>
		  								</div>
		  							</div>
		  						</div>
		  					</div>
		  				</div>
		  				<Button class='yellow-default portfolio' onClick={this.portfolio}>
		  					{ s5_button }
		  				</Button>
		  			</div>
		  		</div>
		    </div>
		)
  	}
}

export default Home;