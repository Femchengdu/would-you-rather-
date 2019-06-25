import React from 'react'
import {connect} from 'react-redux'
import {removeUser} from '../actions/authenticatedUser'

const LogOut = (props) => {
	const dispatch = props.dispatch
	dispatch(removeUser())
	return null
}

export default connect()(LogOut)