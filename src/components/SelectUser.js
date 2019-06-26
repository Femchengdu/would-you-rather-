import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setAuthorizedUser} from '../actions/authenticatedUser'
import './css/selectuser.css'


class SelectUser extends Component {
	state = {
		authorizedUser: 'null'
	}
	selectUser = (event) => {
		const selectedUser = event.target.value
		this.setState(() => ({authorizedUser: selectedUser}))
	}

	submitUser = (event) => {
		event.preventDefault()
		const {dispatch} = this.props
		const selectedUser = this.state.authorizedUser
		dispatch(setAuthorizedUser(selectedUser))
		const redirectLocation = this.props.location
		redirectLocation.pathname === '/logout' ?
		this.props.history.push('/') :
		this.props.history.push(redirectLocation)
	}
	render () {
		return(
			<div className='loginContainer'>
				<header className='loginIntro'>
					<h3>Select a user from the list</h3>
				</header>
				<article className='articleContainer'>
					<form className='loginForm' onSubmit={(event) => this.submitUser(event)}>
						<div className='selectContainer'>
							<select className='loginSelect' onChange={this.selectUser}>
							 <option 
									value='null' 
									key='default'
									>Please select a user</option>
								{
									Object.keys(this.props.users).map((user) => <option 
										value={user} 
										key={user}
										>{user}</option>)
								}
							</select>
						</div>
						<div className='buttonContainer'>
							<button
							className='loginButton' 
							type='submit'
							disabled= {this.state.authorizedUser === 'null'}>Submit</button>
						</div>
					</form>
				</article>	
			</div>
		)
	}
}

const mapStateToProps = ({users}) => {
	return {
		users
	}
}

export default withRouter(connect(mapStateToProps)(SelectUser))