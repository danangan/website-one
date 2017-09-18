// IMPORT LIBRARIES
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyRouterMiddleware, Router, Route, IndexRoute, browserHistory, IndexRedirect} from 'react-router'
import { useScroll } from 'react-router-scroll'
import { syncHistoryWithStore, routerReducer, push } from 'react-router-redux'
import store from './store'

// IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';

// IMPORT LAYOUT
import Layout from './components/Layout'

// IMPORT PAGES
import Home from './pages/home'
import AboutUs from './pages/about-us'
import Portfolio from './pages/portfolio'
import License from './pages/license'
import Gallery from './pages/gallery'
import ContactUs from './pages/contact-us'
import NotFound from './pages/notfound'


const app = document.getElementById('app')

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
	    <Router history 	= { history }
	    		render 		= { applyRouterMiddleware( useScroll((prevRouterProps, {location})=>{
	    							return true;
	    						})) }>
	    	<Route component = {Layout} >
	    		<Route path='/' component = {Home} />
	    		<Route path='/about-us' component = {AboutUs} />
	    		<Route path='/portfolio' component = {Portfolio} />
	    		<Route path='/license' component = {License} />
	    		<Route path='/gallery' component = {Gallery} />
	    		<Route path='/contact-us' component ={ContactUs} />
	    		<Route path='*' component = {NotFound} />
	    	</Route>
	    </Router>
	</Provider>, app);