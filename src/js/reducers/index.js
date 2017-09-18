import { combineReducers } from 'redux'
import home from './HomeLang'
import footer from './FooterLang'
import header from './HeaderLang'
import about from './AboutLang'
import app from './App'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
	app,
	home,
	footer,
	header,
	about,
	routing : routerReducer,
})