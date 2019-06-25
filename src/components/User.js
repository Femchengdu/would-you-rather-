import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatUser} from '../utils/helper'
import Avatar from './Avatar'
import './css/user.css'


class User extends Component {
	
	render() {
		const {name, createdQuestions, answeredQuestions, score, avatar} = this.props
		return(
			<article className='userContainer'>
				<div className='flexItem'>
					<Avatar authorsAvatar={avatar} size={120} authorsName={name}/>
				</div>
				<section className='flexItem'>
					<h3>{name}</h3>
					<p>Answered questions {answeredQuestions}</p>
					<p>Created questions  {createdQuestions}</p>
					<p>Score  {score}</p>
				</section>	
			</article>
		)
	}
}


const mapStateToProps = ({users}, {id}) => {
	return formatUser(users, id)
}

export default connect(mapStateToProps)(User)