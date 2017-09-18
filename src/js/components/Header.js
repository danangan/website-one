// Libraries
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import {Button, Tooltip} from 'reactstrap'
import store from '../store'
import WatchClickOutside from './WatchClickOutside'

@connect((store) => {
    return {
    	active_language : store.app.active_language, 
    	nav1 			: store.header.nav1,
    	nav2			: store.header.nav2,
    	nav3 			: store.header.nav3,
    	nav4			: store.header.nav4,
    	nav5 			: store.header.nav5,
    	nav6 			: store.header.nav6
    };
})

class Header extends Component {
	constructor(props){
		super(props);
		this.select_bahasa 	= this.select_bahasa.bind(this);
		this.select_english = this.select_english.bind(this);
		this.toggleMenu 	= this.toggleMenu.bind(this);
		this.handleClick 	= this.handleClick.bind(this);
		this.toggleBahasa 	= this.toggleBahasa.bind(this);
		this.toggleEnglish 	= this.toggleEnglish.bind(this);
		this.state 			= {
			showmenu : false,
			tooltipBahasaOpen: false,
			tooltipEnglishOpen: false,
		};
	}

	handleClick() {
		if (this.state.showmenu) {
			this.setState({showmenu : false})
		}
	}

	toggleMenu(){
		this.setState({showmenu : !this.state.showmenu});
	}

	select_bahasa(){
		this.props.dispatch({type: "CHANGE_LANGUAGE_ENG_TO_IND"});
	}

	select_english(){
		this.props.dispatch({type: "CHANGE_LANGUAGE_IND_TO_ENG"});
	}

	toggleBahasa() {
		this.setState({
			tooltipBahasaOpen: !this.state.tooltipBahasaOpen
		});
	}

	toggleEnglish() {
		this.setState({
			tooltipEnglishOpen: !this.state.tooltipEnglishOpen
		});
	}

	render(){
		return (
			<div id = 'header'>	
				<Button id='burger-button' onClick= {this.toggleMenu}  class={ location.pathname.includes('gallery') ? "dark" : "light"}>
					<i class="fa fa-bars" aria-hidden="true"></i>
				</Button>
				<WatchClickOutside onClickOutside={this.handleClick}>
					<div id='menu' class={ this.state.showmenu ? 'show' : 'hide' }>
						<ul>
							<li class = 'header' >
								<Button onClick = {this.toggleMenu} class='close-btn' >
									<i class="fa fa-times" aria-hidden="true"></i>
								</Button>
							</li>
							<li onClick = {this.toggleMenu} class = 'navigation'><Link to='/'>{ this.props.nav1 }</Link></li>
							<li onClick = {this.toggleMenu} class = 'navigation'><Link to='/about-us'>{ this.props.nav2 }</Link></li>
							<li onClick = {this.toggleMenu} class = 'navigation'><Link to='/portfolio'>{ this.props.nav3 }</Link></li>
							<li onClick = {this.toggleMenu} class = 'navigation'><Link to='/license'>{ this.props.nav4 }</Link></li>
							<li onClick = {this.toggleMenu} class = 'navigation'><Link to='/gallery'>{ this.props.nav5 }</Link></li>
							<li onClick = {this.toggleMenu} class = 'navigation'><Link to='/contact-us'>{ this.props.nav6 }</Link></li>
						</ul>
						<Button id='bahasa' class={ this.props.active_language=='ind' ? "active lang": "lang"} onClick={ this.select_bahasa }>
							<img src='img/icon/ind.png' alt='Bahasa'/>
						</Button>
						<Tooltip placement="top" isOpen={this.state.tooltipBahasaOpen} target="bahasa" toggle={this.toggleBahasa}>
				          Klik untuk ubah bahasa ke Bahasa Indonesia
				        </Tooltip>
						<Button id='english' class={ this.props.active_language=='eng' ? "active lang": "lang"} onClick={ this.select_english }>
							<img src='img/icon/uk.png' alt='English'/>
						</Button>
						<Tooltip placement="top" isOpen={this.state.tooltipEnglishOpen} target="english" toggle={this.toggleEnglish}>
				          Click to change language to English
				        </Tooltip>
					</div>
				</WatchClickOutside>
			</div>
		)
	}
}

export default Header;