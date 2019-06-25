import React, {Component} from 'react'
import Avatar from './Avatar'
import {connect} from 'react-redux'
import {combineAsyncAnsQuestion} from '../actions/shared'
import {withRouter} from 'react-router-dom'
import './css/poll.css'
import {formatPoll} from '../utils/helper'


class Poll extends Component {
	state = {
		selected: ''
	}

	handleQuestSubmit = (event) => {
		event.preventDefault()
		const {dispatch} = this.props
		const payload = {
			qid: this.props.id,
			answer: this.state.selected
		} 
		console.log('The selected value is : ', payload)
		
		dispatch(combineAsyncAnsQuestion(payload))
		this.setState(() => ({
			selected: ''
		}))
		this.props.history.push(`/result/${this.props.id}`)
		// Todo, redirect to completed poll page
	}

	handleAnsOpt = (event) => {
		const {value} = event.target
		this.setState(() => ({
			selected: value,
		}))
	}

	render() {
		const {authorName, authorAvatar, optionOne, optionTwo} = this.props
		return (
			<div className='pollContainer'>
				<div className='introBar'>
					<h4>{authorName} asks: </h4>
				</div>
				<article className='flexContainer'>
					<div className='flexItem'>
						<Avatar authorsAvatar={authorAvatar} size={120} authorsName={authorName}/>
					</div>
					<section className='flexItem'>
						<h3>Would you rather... </h3>
						<form onSubmit={this.handleQuestSubmit}>
							<p>
								<input 
									type='radio' 
									name='option' 
									value='optionOne'
									onChange={this.handleAnsOpt}
								/> 
								<span>{optionOne}</span><br/>
								<input 
									type='radio' 
									name='option' 
									value='optionTwo' 
									onChange={this.handleAnsOpt}
								/>
								<span>{optionTwo}</span><br/>
							</p>
							<button 
								className='button'
								type='submit'
								disabled={this.state.selected === ''}
							>
								Submit
							</button>
						</form>	
					</section>	
				</article>
			</div>
		)
	}
}

const mapStateToProps = ({users, questions}, props) => {
	return formatPoll(users, questions, props)
}

export default withRouter(connect(mapStateToProps)(Poll))