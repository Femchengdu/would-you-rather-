import React, {Component} from 'react'
import User from './User'
import {connect} from 'react-redux'
import './css/leader.css'

class LeaderBoard extends Component {
	render() {
		const {userIds} = this.props
		return(
			<div className='leadcontainer'>
				<header className='leadHeader'>
					<h3>Leader board</h3>
				</header>
				<ul className='leadList'>
					{userIds.map((id) =>(
						<li key={id}>
							<User id={id} />
						</li>
					))}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = ({users}) => {
	return {
		userIds: Object.keys(users)
			.sort((a, b) => Object.keys(users[b].answers).length - Object.keys(users[a].answers).length)
	}
}


export default connect(mapStateToProps)(LeaderBoard)