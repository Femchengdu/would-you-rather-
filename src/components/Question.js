import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Avatar from './Avatar'
import './css/question.css'
import {formatQuestion} from '../utils/helper'

class Question extends Component {
	toPoll = (event) => {
		event.preventDefault()
		this.props.answered === true ? 
			this.props.history.push(`/result/${this.props.id}`) :
			this.props.history.push(`/question/${this.props.id}`)
	}
	render() {
		const { questionOne, questionTwo, authorName, authorAvatar} = this.props
		return (
			<div className='questContainer'>
				<div className='introBar'>
					<h4>{authorName} asks:</h4>
				</div>
				<article className='flexContainer'>
					<div className='flexItem'>
						<Avatar authorsAvatar={authorAvatar} size={120} authorsName={authorName}/>
					</div>
					<section className='flexItem'>
						<p>
							<b><em>Would you rather:</em></b><br />
							<span>{questionOne}</span> 
							<br />or<br /> 
							<span>{questionTwo}</span>
						</p>
						<div>
							<button className='button' onClick={(event) => this.toPoll(event)}> View Poll </button>
						</div>
					</section>
				</article>
			</div>
		)
	}
}

const mapStateToProps = ({authenticatedUser, users, questions}, {id, answered}) => {
	return formatQuestion(questions, users, authenticatedUser, id, answered)
}

export default withRouter(connect(mapStateToProps)(Question))