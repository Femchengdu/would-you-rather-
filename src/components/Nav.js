import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import './css/nav.css'
import {formatNav} from '../utils/helper'


class Nav extends Component {
	render() {
		const {usersName} = this.props
		return (
			<nav>
				<ul className='navList'>
					<li className='listElement'>
						<NavLink to='/' className='navLink'>Home</NavLink>
					</li>
					<li className='listElement'>
						<NavLink to='/add' className='navLink'>New Question</NavLink>
					</li>
					<li className='listElement'>
						<NavLink to='/leaderboard' className='navLink'>Leader Board</NavLink>
					</li>
					{
						usersName &&
						<li className='listElement'>
							<span>Welcome! {usersName}</span>
						</li>
					}
					{
						usersName &&
						<li className='listElement'>
							<NavLink to='/logout' className='navLink'>Logout</NavLink>
						</li>
					}
				</ul>
			</nav>
		)
	}
}


const mapStateToProps = ({authenticatedUser, users}) => {
	return formatNav(authenticatedUser, users)
}
export default connect(mapStateToProps)(Nav)